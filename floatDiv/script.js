var box = document.querySelector('div');
var button = document.querySelector('button');


button.addEventListener("click", move);

function move() {
    setInterval(function () {
        var position = box.getBoundingClientRect().left;
        box.style.left = position + 5 + "px";

        if((document.documentElement.clientWidth - box.getBoundingClientRect().right)<0)
            box.style.left = 0;

    }, 20)
};

