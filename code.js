var changeButton = document.getElementById("change-button");
var text = document.getElementById("text-change");
var newText = document.getElementById("new-text");

function GetText() {
    var X = text.value;
    return X;
}

function ChangeText() {
    newText.innerHTML= GetText();
    text.value ="";
}

changeButton.addEventListener("click", ChangeText);