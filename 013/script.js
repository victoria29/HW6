var button = document.querySelector('[type = "submit"]');
var form = document.querySelector('form')
window.addEventListener('change', check);


function check(event) {
    if (event.target.name == 'userName') {
        if (/\S/.test(event.target.value)) {
            event.target.className = "valid"
        } else {
            event.target.className = "invalid"
        }
    } else if (event.target.name == 'email') {
        if (/\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i.test(event.target.value)) {
            event.target.className = "valid"
        } else {
            event.target.className = "invalid"
        }
    } else if (event.target.name == 'zip') {
        if (/\d{5}/.test(event.target.value)) {
            event.target.className = "valid"
        } else {
            event.target.className = "invalid"
        }
    }
}
var state;
button.addEventListener('click', onsubmitHandler);
function onsubmitHandler(event) {
    event.preventDefault();
    for (var i = 0; i < form.elements.length-1; ++i) {
         var elem = form.elements[i];
             if (elem.backgroundColor = "pink") {
                     state = false;
                    }
    }
    if(!state){
        alert("Допущены ошибки при заполнении формы.");
    }
}