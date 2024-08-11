const array1 = [
    'Alonzo',
    'Bill Bailey', 
    'Bombalurina',
    'Electra',
    'Pluto'
];
function console1 () {
    console.info("client1.js;console1:DOM loaded");
    let ulelem;
    let node;
    let textnode;
    const elem = document.getElementById("dv1");
    ulelem = document.getElementById("list");
    const map1 = array1.map((x)=> {
        node=document.createElement("li");
        textnode = document.createTextNode(x);
        node.appendChild(textnode);
        ulelem.appendChild(node);
    });

}
if (document.readyState === "loading") {
    console.log("client1.js:is loading..")
    document.addEventListener(
        "DOMContentLoaded", console1
    );
} else { // "DOMContentLoaded" has already fired
    console1();
}

function onClick() {
    const index = Math.floor(Math.random()*array1.length);
    const catName = array1[index];
    document.body.innerText = catName;
}
const button1 = document.querySelector("button");
button1.addEventListener("click", (e)=>{
    onClick();
});