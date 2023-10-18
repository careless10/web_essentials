window.onload = () => {
  const item = document.querySelector(".bg-blue");
  // console.log(item.innerText);
  item.innerHTML = "<p>Changed By Code</p>";
  // item.remove();
  item.classList.add("h-100");
};
