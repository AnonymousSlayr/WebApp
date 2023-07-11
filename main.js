var label2 = document.getElementById("name2");
var label1 = document.getElementById("name1");

function print() {
  window.location.href = "/?name=" + label2.value;
}

var urlParams = new URLSearchParams(window.location.search);
label1.innerHTML = urlParams.get('name');
