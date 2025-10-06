document.addEventListener("DOMContentLoaded", function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        const dataContainer = document.getElementById("api-data");
        try {
            const response = await fetch(apiUrl);
            if(!response.ok) {
                throw new Error("failed to fetch data from url");
            }
            const users = await response.json();
            dataContainer.innerHTML = "";
            const userList = document.createElement("ul");

            users.forEach((user) => {
                let li = document.createElement("li");
                li.textContent = user.name;
                userList.append(li);
            });
            dataContainer.appendChild(userList);
        } catch(error) {
            dataContainer.innerHTML = "";
            dataContainer.textContent = "Failed to load user data.";
            console.log("failed to fetch data", error);
        }
    }
    fetchUserData();
})