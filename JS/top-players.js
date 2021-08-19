const all = document.getElementsByClassName("player-name");
for (var i = 0; i < all.length; i++) {
    all[i].style.backgroundColor = 'rgba(163, 52, 243, 0.43)';
    all[i].style.margin = "20px";
    all[i].style.paddingLeft = "10px";
    all[i].style.borderRadius = "10px";
}


// UL script 
document.getElementById("ul-button").addEventListener("click", function() {
    // console.log("newOne");
    const newOne = document.createElement("li");
    newOne.innerText = "Hi-$";
    document.getElementById("ul").appendChild(newOne);

})

// Input Script 
document.getElementById("input-btn").addEventListener("click", function() {
    const num = document.getElementById("input-feild").value;
    if (num == "") {
        document.getElementById("input-feild").value = 0;
    } else if (num == "5") {
        document.getElementById("input-btn").setAttribute("disabled", "")
    } else {
        document.getElementById("input-feild").value = parseFloat(num) + 1;
    }
})