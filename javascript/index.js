/** 
 *  Performing CURD operations using JSON and DOM
 *  Array Method , Closures
 */
// let x = 10;
// function x() {
//     let a = 20;
//     function y() {
//         console.log(a, x);
//     }
//     return y;
// }

// let res = x(); // y function defination
// res();

// function getMultiplication(num) {
//     return function (val) {
//         console.log(num * val);
//     }
// }

// let multiple = getMultiplication(5);

// multiple(2);
// multiple(4);
// multiple(7);
// multiple(3);
// multiple(8);

// let arr = [1, 2, 3, 4, 5, 6];
// while , do while , for , for in , for of

// Iterative Methods in js -> forEach , map , filter

// arr.forEach(element => console.log(element));

let container = document.getElementById("container");
let btn = document.getElementById("btn");
// Click
btn.addEventListener("click", function () {
    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let description = document.getElementById("description");
    if (title.value == "" || price.value == "" || description.value == "") {
        alert("Enter data properly");
    }
    else {
        let options = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "title": title.value,
                "price": price.value,
                "description": description.value
            })
        }
        fetch("https://branch-silver-narwhal.glitch.me/products", options)
            .then(res => {
                if (res.ok) {
                    title.value = '';
                    price.value = '';
                    description.value = '';
                    getData(); // mandatory
                    alert("Data Added");
                }
            })
    }
})

function getData() {
    fetch("https://branch-silver-narwhal.glitch.me/products")
        .then(res => res.json())
        .then(data => displayData(data));
}
function displayData(products) {
    container.innerHTML = ``; // mandatory
    products.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p>${obj.title}</p>
            <p>${obj.description}</p>
            <button onclick = deleteData('${obj.id}')>Delete</button>
        `;
        container.appendChild(item);
    })
}

function deleteData(id) {
    console.log(id)
    let options = {
        "method": "DELETE"
    }
    fetch(`https://branch-silver-narwhal.glitch.me/products/${id}`, options)
        .then(res => {
            if (res.ok) {
                getData(); // mandatory
                alert("Data Deleted");
            }
        })
        .catch(err => console.error(err));
}

getData();


