function changeText() {
  document.getElementById("text").innerText = "Hello JavaScript!";
}

let count = 0;

function increment() {
  count++;
  document.getElementById("count").innerText = count;
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  if (name === "" || email === "") {
    message.innerText = "Error: Please fill all fields";
    message.style.color = "red";
  } else {
    message.innerText = "Success!";
    message.style.color = "green";
  }
});