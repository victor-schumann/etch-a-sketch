let size = 16;

function getWidth() {
    return document.getElementById("container").offsetWidth;
}

function getHeight() {
    return document.getElementById("container").offsetHeight;
}

function changeColor(e) {
    console.log(e.type);
    if (e.type=="mouseover" && !mouseDown) {
        return;
    }
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function clearAndResize() {
        size = window.prompt("Enter a grid size between 8 and 100");
    if (size>100 || size<8) {
        return clearAndResize();
    }
    let cont = document.getElementById("container");
    cont.innerHTML = "";
    for (let i = 0; i<size ; i++) {
        var row = document.createElement("div");
        var width = getWidth();
        var height = getHeight()/size;
        row.classList.add("rows");
        row.setAttribute("width", width);
        row.setAttribute("height", height);
        for(let j = 0; j < size; j++) {
            var cell = document.createElement("div");
            width = row.getAttribute("width")/size;
            height = row.getAttribute("height");
            cell.classList.add("cells");
            cell.style.width = width+"px";
            cell.style.height = height+"px";
            cell.style.background = "black";
            cell.style.display = "inline-block"
            cell.addEventListener("mouseover", changeColor);
            cell.addEventListener("mousedown", changeColor);
            row.appendChild(cell);
        }
        document.getElementById("container").appendChild(row);
    }
}

for(var i = 0; i < size; i++) {
    var row = document.createElement("div");
    var width = getWidth();
    var height = getHeight()/size;
    row.classList.add("rows");
    row.setAttribute("width", width);
    row.setAttribute("height", height);
    for(var j = 0; j < size; j++) {
        var cell = document.createElement("div");
        width = row.getAttribute("width")/size;
        height = row.getAttribute("height");
        cell.classList.add("cells");
        cell.style.width = width+"px";
        cell.style.height = height+"px";
        cell.style.background = "black";
        cell.style.display = "inline-block"
        cell.addEventListener("mouseover", changeColor);
        cell.addEventListener("mousedown", changeColor);
        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const clearBtn = document.querySelector("button");
clearBtn.addEventListener("click", clearAndResize);

window.onresize = function() {
    const arrRow = document.getElementsByClassName("rows");
    const arrCell = document.getElementsByClassName("cells");
    for(var i = 0; i < arrRow.length; i++) {
        var width = getWidth();
        var height = getHeight()/size;
        arrRow[i].setAttribute("width", width);
        arrRow[i].setAttribute("height", height);
        for(var j = 0; j < arrCell.length; j++) {
            width = arrRow[i].getAttribute("width")/size;
            height = arrRow[i].getAttribute("height");
            arrCell[j].style.width = width+"px";
            arrCell[j].style.height = height+"px";
        }
    }
}