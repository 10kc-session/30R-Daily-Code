async function getData() {
    try {
        document.getElementById("loader").style.display = "flex";
        document.getElementById("container").style.display = "none";

        let response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("HTTP error: " + response.status);
        let result = await response.json();

        localStorage.setItem("products", JSON.stringify(result.products));
        displayData(result.products);
    } catch (err) {
        console.error(err);
        document.getElementById("loader").innerText = "Failed to load products.";
    }
}

function displayData(products) {
    let container = document.getElementById("container");
    container.innerHTML = "";

    products.forEach(({ id, title, brand, category, description, price, rating, images }) => {
        let item = document.createElement("div");
        item.className = "item";

        item.innerHTML = `
                    <img src='${images[0]}' alt='${title}'>
                    <h3>${title}</h3>
                    <p><strong>Price:</strong> $${price}</p>
                    <p><strong>Brand:</strong> ${brand || "Not available"} | <strong>Rating:</strong> ${rating}</p>
                    <p><strong>Category:</strong> ${category}</p>
                    <p>${description.substring(0, 80)}...</p>
                    <button onclick='getMoreData(${id})'>See More</button>
                `;
        container.appendChild(item);
    });

    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "grid";
}

function getMoreData(id) {
    window.location.href = `./more.html?id=${id}`;
}

getData();