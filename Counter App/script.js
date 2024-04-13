let element = document.getElementById("counter");

decrement = () =>
{
    let value = parseInt( element.innerText ) ;
    element.innerText = --value ;
}

increment = () =>
{
    let value = parseInt( element.innerText ) ;
    element.innerText = ++value ;
}
