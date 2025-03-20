// /**
//  *  Error Handling and Rapid API (with PostMan)
//  *  -------------------------------------------
//  */

// // let a = 10;
// // try {
// //     a();
// // } catch (err) {
// //     console.error(err.message);
// // }
// // console.log("Hello World");

// // let a = 10;
// // let b = 0;

// // try {
// //     if (a == 0 || b == 0) {
// //         throw "Zero Not Allowed";
// //         console.log("Hello World"); // unreachable
// //     }
// //     console.log(a / b);
// // } catch (err) {
// //     console.error(err);
// // }

// // let name = '';
// // let pass = '';
// // try {
// //     if (name == '' || pass == '') {
// //         throw new Error("Empty data is not allowed");
// //     }
// // } catch (err) {
// //     console.error(err.message);
// // }


// async function getData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//         if (!response.ok) {
//             throw new Error("HTTP Request Error  : ", response.status);
//         }
//         let result = await response.json()
//         console.log(result);
//     } catch (err) {
//         console.error(err);
//     }
// }
// // getData();

// const url = 'https://imdb236.p.rapidapi.com/imdb/india/top-rated-telugu-movies';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'bc5555fe56msh26c6fab31eee891p134e18jsn11126a4834c4',
//         'x-rapidapi-host': 'imdb236.p.rapidapi.com'
//     }
// };

// async function getImdbData() {
//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error("Invalid or failed to fetch", response.status);
//         }
//         const result = await response.json();
//         console.log(result);
//     } catch (err) {
//         console.error(err);
//     }
// }
// getImdbData();

// async function getWeather() {
//     let city = window.prompt("Enter City Name");
//     const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'bc5555fe56msh26c6fab31eee891p134e18jsn11126a4834c4',
//             'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error("HTTP Error : ", response.status, response.statusText);
//         }
//         const result = await response.json();
//         displayData(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// function displayData(obj) {
//     console.log(obj)
//     let container = document.querySelector(".container");
//     container.innerHTML = `
//         <p>CITY : ${obj.location.city} </p>
//         <p>COUNTRY : ${obj.location.country} </p>
//         <p>HUMIDITY : ${obj.current_observation.atmosphere.humidity}</p>
//         <p>TEMPERATURE : ${obj.current_observation.condition.temperature}</p>
//     `
// }

async function getRandomUsers() {
    let response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
        throw new Error("Something Went Worng");
    }
    let user = await response.json();
    displayData(user);
}

function displayData(user) {
    let obj = user.results[0];
    let { title, first, last } = obj.name;
    let { age, date } = obj.dob;
    let container = document.querySelector(".container");
    container.innerHTML = `
        <img src = '${obj.picture.large}'>
        <p>${title + " : " + first + " " + last} Gender : ${obj.gender}</p>
        <p>Email : ${obj.email} Phno : ${obj.phone}</p>
        <p>Age : ${age} , DOB : ${date}</p>
    `;
}


window.addEventListener("DOMContentLoaded", function () {
    setInterval(() => {
        getRandomUsers();
    }, 1000);
})