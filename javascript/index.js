// let table = document.createElement("table");
// let trHead = document.createElement("tr");
// let headings = ["sno", "name", "rollno"];

// for (let heading of headings) {
//     let th = document.createElement("th");
//     th.innerText = heading;
//     trHead.appendChild(th);
// }

// table.appendChild(trHead);

// let data =
//     [
//         ["1", "Raju", "101"],
//         ["2", "Rag", "102"],
//         ["3", "Raghu", "103"],
//         ["4", "Rages", "104"],
//         ["5", "Rakesh", "105"]
//     ];

// for (let element of data) {
//     let tr = document.createElement("tr");
//     for (let item of element) {
//         let td = document.createElement("td");
//         td.innerText = item;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);
let container = document.createElement("div");
container.className = 'container';

let loader = document.getElementById("loader");
function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(err => console.error(err));
}
function displayData(products) {
    for (let obj of products) {
        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <img src = '${obj.image}' class = 'image'>
            <p class='text'>${obj.title} - <span> ${obj.price}</span></p>
            <p class = 'description'>${obj.description}</p>
            <p class='rating'>${obj.rating.rate}</p>
        `;
        container.appendChild(item);
    }
    loader.remove();
    document.body.appendChild(container);
}

fetchData();