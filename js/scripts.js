//alert("Hello!");
console.log("Hello!");
const hello = document.getElementById("hello");
hello.addEventListener("click", greeting);

function greeting() {
  hello.textContent = "Updated Hello!";
}
