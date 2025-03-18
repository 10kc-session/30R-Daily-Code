let container = document.createElement("div");
let url = "https://branch-silver-narwhal.glitch.me/products";

let titleInput = document.getElementById("title");
let priceInput = document.getElementById("price");
let descriptionInput = document.getElementById("description");
let idInput = document.getElementById("id");
let btn = document.getElementById("btn");

btn.addEventListener("click", async function () {
    if (titleInput.value == '' || priceInput.value == "" || descriptionInput.value == '') {
        alert("enter data properly");
    } else {
        let method = idInput.value ? "PUT" : "POST";
        let mainUrl = (method == "PUT") ? `${url}/${idInput.value}` : url;
        try {
            let response = await fetch(mainUrl, {
                method,
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "title": titleInput.value,
                    "price": priceInput.value,
                    "description": descriptionInput.value
                })
            });
            if (response.ok) {
                getData();
                alert((method == "PUT") ? "Data Updated" : "Data Added");
            }
        } catch (err) {
            console.error(err);
        }
    }
});

async function getData() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            displayData(data);
        }
    } catch (err) {
        console.error(err);
    }
}
function displayData(products) {
    container.innerHTML = ``;
    products.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p>${obj.title}</p>
            <p>${obj.description}</p>
            <p>${obj.price}</p>
            <button onclick = deleteData('${obj.id}')>Delete</button>
            <button onclick = updateData('${obj.id}')>Update</button>
        `;
        container.appendChild(item);
    })
    document.body.appendChild(container);
}

async function updateData(id) {
    try {
        let response = await fetch(`${url}/${id}`);
        let obj = await response.json();
        titleInput.value = obj.title;
        priceInput.value = obj.price;
        descriptionInput.value = obj.description;
        idInput.value = obj.id;
        window.scroll({
            top: 0,
            behavior: "smooth"
        });

    } catch (err) {
        console.error(err)
    }
}

async function deleteData(id) {
    try {
        let response = await fetch(`${url}/${id}`, { "method": "DELETE" })
        if (response.ok) {
            getData();
            alert("Data Deleted");
        }
    }
    catch (err) {
        console.error(err);
    }
}

getData();