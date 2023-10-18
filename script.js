function validateContactForm(){
    let number = document.forms["contact-form"]["number"].value;
    if(!isNaN(number)){
        return true;
    }else{
        return false;
    }
 }

 function changeTextColor(){
    let elem = document.getElementById("p1");
    elem.style.color = "red";
    elem.style.backgroundColor = "#ccc";
    elem.style.paddingTop = "10px";
    elem.style.paddingBottom = "10px";
    elem.style.paddingLeft = "10px";
 }

 document.getElementById("hideP").addEventListener("click", hideElement);
 document.getElementById("showP").addEventListener("click", showElement);

 function hideElement(){
    let elem = document.getElementById("p1");
    elem.style.visibility = "hidden";
 }

 function showElement(){
    let elem = document.getElementById("p1");
    elem.style.visibility = "visible";
 }


 function getFullName(){
    let val = document.getElementById("fullName").value;
    console.log(val);
}



animateElem = document.getElementById("animateDiv");
let rotate = 0;
let mLeft = 0;
let mRight = 0;

function animateDiv(){
    rotate++;
    mLeft++;
    mRight++;

    animateElem.style.rotate = `${rotate}deg`;
    animateElem.style.marginLeft = `${mLeft}px`;
    animateElem.style.marginRight = `${mRight}px`;

    requestAnimationFrame(animateDiv);
}

animateDiv();
function colorChange(){
    document.getElementById("animateDiv").style.backgroundColor = "lightgreen";
}
