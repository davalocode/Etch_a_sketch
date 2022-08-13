let small=256;
let big=4096;
let target;

function añadir_small(small) {
    let i=0;
    document.getElementById("container").style.gridTemplateColumns="repeat(16, 1fr)";
    document.getElementById("container").style.gridTemplateRows="repeat(16, 1fr)";
    while (i<small) {
        i++;
        let div=document.createElement("div");
        div.className="divs";
        document.getElementById("container").append(div);
    }
}

function añadir_big(big) {
    let i=0;
    document.getElementById("container").style.gridTemplateColumns="repeat(64, 1fr)";
    document.getElementById("container").style.gridTemplateRows="repeat(64, 1fr)";
    while (i<big) {
        i++;
        let div=document.createElement("div");
        div.className="divs";
        document.getElementById("container").append(div);
    }
}

function changeColor (target) {
    target.style.backgroundColor = color_point;
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.divs")) {
        changeColor(target);
    }
});

function borrar() {
    window.location.reload();
}

let color_point;
let color_background;

const colorp=document.querySelectorAll("#color_point");

colorp[0].addEventListener("change", (e) => {
    color_point = e.target.value;
    console.log(color_point);
})

const colorb=document.querySelectorAll("#color_background");

colorb[0].addEventListener("change", (e) => {
    color_background = e.target.value;
    console.log(color_background);
    document.getElementById("container").style.backgroundColor=color_background;
})
