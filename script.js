function showAlert(){
    alert("Loading weather report...");
}

function dismissCookie() {
    document.getElementById("cookieBox").remove();
}

function convertTemp(element, className){
    var tempElement = document.querySelector(className);
    var temp = tempElement.innerHTML;

    if (element.value === "°C"){
        temp = Math.round((temp - 30) / 2);
        console.log(temp);
        document.querySelector(className).innerHTML = temp;
    } else {
        temp = Math.round(temp * 2 + 30);
        console.log(temp);
        document.querySelector(className).innerHTML = temp;
    }
}


function tempConvertion(element){
    //console.log(element.value);
    convertTemp(element, ".temp1");
    convertTemp(element, ".temp2");
    convertTemp(element, ".temp3");
    convertTemp(element, ".temp4");
    convertTemp(element, ".temp5");
    convertTemp(element, ".temp6");
    convertTemp(element, ".temp7");
    convertTemp(element, ".temp8");
}