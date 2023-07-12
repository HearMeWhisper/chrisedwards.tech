function out0() {
  document.getElementById("out").innerHTML = "";
  if (document.getElementById("text_binary").checked == true) out();
  else if (document.getElementById("binary_text").checked == true) out1();
}

function out() {
  console.log("out");
  document.getElementById("out").innerHTML = "";
  var binary_out = "";
  document.getElementById("input").innerHTML.replace(/&nbsp; /g, "");
  var input = document.getElementById("input").textContent;
  for (var i = 0; i < input.length; i++) {
    var z = input.charCodeAt(i).toString(2);
    if (input.charAt(i) == " ") {
      binary_out += "00100000 ";
    } else {
      while (z.length < 8) {
        z = "0" + z;
      }
      binary_out += z;
      binary_out += " ";
    }
  }
  document.getElementById("out").innerHTML = binary_out;
}

function out1() {
  console.log("out1");
  document.getElementById("out").innerHTML = "";
  var text_out = "";
  var input = document.getElementById("input").textContent.replace(/ /g, "");
  input = input.replace(/&nbsp; /gi, "");
  for (var i = 0; i < input.length; i = i + 8) {
    var z = "";
    var z = input.substr(i, 8);
    text_out += String.fromCharCode(parseInt(z, 2)) + "";
  }
  document.getElementById("out").textContent = String(text_out);
}

function copy0() {
  document.getElementById("out").value.select();
}

function copy() {
  if (document.selection) {
    var div = document.body.createTextRange();
    div.moveToElementText(document.getElementById("out"));
    div.select();
  } else {
    var div = document.createRange();
    div.setStartBefore(document.getElementById("out"));
    div.setEndAfter(document.getElementById("out"));
    window.getSelection().addRange(div);
  }
}

function clear1() {
  document.getElementById("input").textContent = "";
}
let copyText = document.getElementById("out");
function copyOut() {
  // Get the text field
  copyText = document.getElementById("out");
  // focus text feild
  copyText.focus();
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
