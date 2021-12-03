function sortear() {
  let peopleNumber = 1000000000;
  let number = Math.round(Math.random() * peopleNumber);

  document.getElementById("title").innerHTML = number;
}
