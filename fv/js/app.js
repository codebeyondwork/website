var form = document.getElementById('fv-form');
var msg = form.appendChild(document.createElement("p"));
msg.appendChild(document.createTextNode("Go ahead, click me "));
msg.appendChild(document.createElement("em")).appendChild(document.createTextNode("now!"));

// create document fragment
var f = document.createDocumentFragment();
var q = f.appendChild(document.createElement("p"));
q.appendChild(document.createTextNode("You know you want to, "));
q.appendChild(document.createElement("strong")).appendChild(document.createTextNode("don't you?"));
q.id = "fragment";

form.insertBefore(q, form.firstChild);

form.addEventListener("submit", validateForm);
form.addEventListener("submit", calculateFV);

function calculateFV()
{
    console.log('clicked');
    return false;
}

function validateForm(e)
{
    console.log(e);
    e.preventDefault();
    return false;
}

// remove the form
// form.parentNode.removeChild(form);

