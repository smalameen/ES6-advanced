<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Practice</title>
</head>
<body>
    <h1>Hi I am jason</h1>
    <h4>Here is the list of 10 Voters</h4>

    <ul id="name-container">

    </ul>

    <script>
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json))
        .catch (error =>console.log(error))

        function displayUser(users){
            const userName = users.map(user => user.username);
            const ul = document.getElementById("name-container");
            

            for(let i = 0; i<userName.length; i++){
                const user = userName[i];
                console.log(user);
                const li = document.createElement("li");
                li.innerText = user;
                ul.appendChild(li);

            }
        }


    </script>
</body>
</html>