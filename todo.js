let addtodobutton = document.getElementById('AddToDo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputField');

addtodobutton.addEventListener('click', function(){
	var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
	paragraph.innerText = inputfield.value;
	todocontainer.appendChild(paragraph);
	inputfield.value = '';
	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = 'line-through';
	})
	paragraph.addEventListener('dblclick', function(){
        paragraph.remove(paragraph);
	})
})