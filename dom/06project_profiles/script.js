window.onload = () => {
  const userFetchButton = document.querySelector("#usersFetchButton");

  userFetchButton.addEventListener("click", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const listOfUsers = document.querySelector("#listOfUsers");
    data.forEach((user) => {
      const li = document.createElement("li"); //<li></li>
      const button = document.createElement("button");
      button.innerText = user.name;
      button.addEventListener("click", () => {
        console.log(
          `Clicked button of user ${user.name} that has id ${user.id}`
        );
      });
      li.appendChild(button); //<li>{user.name}</li>
      listOfUsers.appendChild(li); //<ul id="listOfusers"></ul>
    });
  });
};
