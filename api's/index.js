function addData() {
    var username = document.getElementById("username");
    var message = document.getElementById("message");
    postData(username, message);
}

function postData(username, message) {
    if (username.value == "" || message.value == "") {
        alert("Add Username and Message");
    }
    else {
        var url = "https://insidious-receptive-supply.glitch.me/users";
        var options = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "username": username.value,
                "message": message.value
            })
        }
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    // alert("Data added succesfully..");
                    console.log("Data Addded");
                    displayData();
                    alert("Data added successfully")
                    username.value = "";
                    message.value = "";
                }
            })
            .catch(err => {
                alert("Something fishy");
                console.error(err);
            })
    }
}

function displayData() {
    var container = document.getElementById("container");
    fetch("https://insidious-receptive-supply.glitch.me/users")
        .then(response => response.json())
        .then(data => {
            for (var obj of data) {
                // creating elements for every new object 
                var item = document.createElement("div"); // <div> </div>
                item.className = "item m-2 p-2 fs-5 text-uppercase  border border-warning rounded rounded-2"; // <div class = "item"> </div>

                var usernamePara = document.createElement("p"); // <p> </p>
                var messagePara = document.createElement("p"); // <p> </p>

                // Accessing data from obj -> hemanth , now or never
                var { username, message } = obj;

                // adding data into paragraph 
                usernamePara.innerText = username; // <p>Hemanth</p>
                messagePara.innerText = message;  // <p>Now or Never<p>

                // adding paragraphs into item <div class="item"></div>
                item.appendChild(messagePara); // <div class = "item"> <p>Now or Never</p> </div>
                item.appendChild(usernamePara);
                /**
                 * <div class = "item">
                 *      <p>Now or Never</p>
                 *      <p>Hemanth<p>
                 * </div>
                 */

                container.appendChild(item);
            }
        })
}
displayData();