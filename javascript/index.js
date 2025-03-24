let container = document.getElementsByClassName("container")[0];
let btnContainer = document.getElementsByClassName("btn-container")[0];

async function getData() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("HTTP Errror : ", response.status);
        }
        let result = await response.json();
        localStorage.setItem("products", JSON.stringify(result));
        let products = JSON.parse(localStorage.getItem("products"));
        displayData(products);
    } catch (err) {
        console.error(err);
    }
}

function displayData(products) {
    container.innerHTML = ``;
    if (products == null) {
        container.innerHTML = `<h1>No Data Available</h1>`;
    }
    else {
        products.forEach(obj => {
            let { image, title, price, description, category } = obj;
            let item = document.createElement("div");
            item.id = "item";
            item.innerHTML = `
            <img src = '${image}'> 
            <p>Title : ${title} , Price : ${price}</p>
            <p>Description : ${description}</p>
            <p><b>Category : ${category}</b></p>
            `
            container.appendChild(item);
        });
        displayButtons();
    }
}
function displayButtons() {
    btnContainer.innerHTML = ``;
    let products = JSON.parse(localStorage.getItem("products"));
    let allButton = document.createElement("button");
    allButton.innerHTML = `All Data`;
    allButton.addEventListener("click", function () {
        displayData(products);

    })
    btnContainer.appendChild(allButton);
    let categoryArr = products.map(obj => obj.category);
    Array.from(new Set(categoryArr)).forEach(ele => {
        let button = document.createElement("button");
        button.innerHTML = ele;
        button.addEventListener("click", function () {
            filterData(ele, products);
        })
        btnContainer.appendChild(button);
    })
}

function filterData(ele, products) {
    let categoryArr = products.filter(obj => obj.category == ele);
    displayData(categoryArr);
}

getData();