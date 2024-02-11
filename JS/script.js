function getValue(){
    const c = Number(document.getElementById("input").value);
    const f = (9/5*c)+32;
    const frs = document.getElementById("result");
    frs.innerHTML = f+" &#176f";
}