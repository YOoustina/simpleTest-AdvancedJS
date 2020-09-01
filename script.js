var s = fetch("https://jsonplaceholder.typicode.com/users")

async function fetchUsers() {

    var data = await s;
    var users = await data.json(); //10 user

    //    console.log(size)

    GetUsersData(users)


}

fetchUsers();

function GetUsersData(users) {
    for (var i = 0; i < users.length; i++) {
        var idDiv = document.createElement("div");
        idDiv.textContent += `id:${users[i].id}`;
        var btn = document.createElement("button");
        btn.textContent += "Alert data";
        document.querySelector(".container").appendChild(idDiv);
        idDiv.className = "user";
        idDiv.appendChild(btn).setAttribute('class', 'btn')




        var detailsDiv = document.createElement("div");
        detailsDiv.innerHTML += `<p>id:${users[i].id}</p>`
        detailsDiv.innerHTML += `<p>name:${users[i].name}</p>`
        detailsDiv.innerHTML += `<p>E-mail:${users[i].email}</p>`
        detailsDiv.innerHTML += `<p>addres:${users[i].address.street}</p>`
        detailsDiv.innerHTML += `<p>phone no:${users[i].phone}</p>`
        detailsDiv.innerHTML += `<p>website:${users[i].website}</p>`
        detailsDiv.innerHTML += `<p>company:${users[i].company.name} ${users[i].company.catchPhrase} ${users[i].company.bs}</p>`




        document.querySelector(".container").appendChild(detailsDiv);

        detailsDiv.className = " active";





    }
    var x = document.querySelectorAll(".user")

    x.forEach(element => {
        element.addEventListener("click", function (e) {
            console.log(this)
            if (e.target === this) {
                this.nextSibling.classList.toggle("enable");
            }
        });

    });

    var y = document.querySelectorAll(".btn")

    y.forEach(function (curr, i) {
       
        curr.addEventListener("click", function (e) {
            console.log(this)
            if (e.target === this) {
                alert(
                `${users[i].id}
                ${users[i].name}
                ${users[i].email}
                ${users[i].address.street}
                ${users[i].phone} 
                ${users[i].website}
                ${users[i].company.name} ${users[i].company.catchPhrase} ${users[i].company.bs}`
                
                
                
                )

            }

        });
     
    });


}

