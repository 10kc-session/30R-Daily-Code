/**
 *    BOM (browser object modal)
 *    ---------------------------
 *      -> Bom is used to perform manipulations browser , it can access location , history.
 *      we can create a new window using bom.
 *      -> Bom is represented in form of window object
 *          location object 
 *          navigation object
 *          screen object 
 *          document object 
 *      -> storages ->
 *              localStorage   -> it will store the data inside browser even after closing the tab or browser
 *                                  maximum 5mb to 10mb -> lifetime
 *              sessionStorage -> it will store data for particular tab , 5mb -> data storage
 *              cookie         -> lifetime , store the data -> 4kb
 * 
 *  we have to filter the data 
 *      fakestore api 
 *      
 */

// localStorage.setItem("name", "rakesh");
// localStorage.setItem("address", "hyderebad");

// let name = localStorage.getItem("name");
// console.log(name);

// let address = localStorage.getItem("address");
// console.log(address);

// let arr = [1, 2, 3, 4, 5, 6]; // string -> converts non to string

// localStorage.setItem("values", JSON.stringify(arr));

// let res = JSON.parse(localStorage.getItem("values")); // string to non primitive

// console.log(res);

let form = document.querySelector("form");
let input = document.getElementById("name");

form.addEventListener("submit", function (event) {
    if (input.value == '') {
        event.preventDefault();
    }
    else {
        //                    null || [] , ["rakesh"] || []
        let arr = JSON.parse(localStorage.getItem("names")) || []; // ["Rakesh" , "Hemanth"]
        arr.push(input.value); // ["Rakesh" , "Hemanth" , "Suraj"]
        localStorage.setItem("names", JSON.stringify(arr));
        displayData();
    }
})

function displayData() {
    let container = document.querySelector(".container");
    container.innerHTML = ``;
    let data = JSON.parse(localStorage.getItem("names"));
    if (data == null) {
        container.innerHTML = `No Data Available`;
    } else {
        data.forEach(ele => {
            let p = document.createElement("p");
            p.innerHTML = `Name : ${ele}`;
            container.appendChild(p);
        })
    }
}


window.addEventListener("DOMContentLoaded", function () {
    displayData();
})