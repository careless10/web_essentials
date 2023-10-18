window.onload = () => {
  const item = document.querySelector("#fetchButton");
  function clicker() {
    console.log("this button has been clicked");
  }
  item.addEventListener("click", clicker);
  setTimeout(() => {
    item.removeEventListener("click", clicker);
  }, 5000);
};
