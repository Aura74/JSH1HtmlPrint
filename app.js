const greetingChange = document.querySelector(".greeting");
const resopnseChange = document.querySelector(".response");

const textChange = document.querySelector(".text");

function changeGreeting() {
  textChange.innerHTML = "<h1>Im here</h1> <p>Where are you</p>";
}

function changeResponse() {
  textChange.innerHTML = "<h1>Not here</h1> <p>Anywhere</p>";
}
