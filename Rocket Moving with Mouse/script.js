
let myDiv = document.getElementById("my-div");

document.addEventListener("mousemove", (e) => {

    var x = e.pageX;
    var y = e.pageY;

    myDiv.style.left = x-100 +"px";
    myDiv.style.top= y-100 +"px" ;
})