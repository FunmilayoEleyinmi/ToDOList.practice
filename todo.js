let addButton = document.getElementById('addList');
let addcontainer = document.getElementById('todocontainer');
let addinput = document.getElementById('inputField');

addButton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragragh-styling');
    paragraph.innerText = addinput.value;
    addcontainer.appendChild(paragraph);
    // I tried to write a code that would avoid an empty entry but it affects the other function
    // for instance, returning an empty input field or removing the list. please put me through sir
    /*if (addinput.value === '') {
        alert('You must write something!')
    } else {
        document.getElementById('inputField').appendChild(paragraph)
    }*/
    addinput.value = '';

    paragraph.addEventListener('click', function() {
        addcontainer.removeChild(paragraph)
    })

})
// do this in the morning
    localStorage.setItem ('value', 'addinput.value');
    paragraph.innerText = localStorage.getItem('value')