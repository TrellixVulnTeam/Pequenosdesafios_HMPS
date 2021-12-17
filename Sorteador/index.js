function sortear() {
  let peopleNumber = 100;
  let number = Math.round(Math.random() * peopleNumber);

  document.getElementById("title").innerHTML = number;
}
