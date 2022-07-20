import './style.css';
import addList from "./add.js";
import reload from "./reload.js";

const formWrapper = document.querySelector('.form-wrapper');
 let form = document.createElement('form');
form.classList.add('submit-form');
form.setAttribute('id', 'form');
form.innerHTML = `
<div class='form-class'>
<h4 class='add-score-label'>Add your score</h4>
<input class="display-name" type="text" pattern="[a-zA-Z'-'\s]*" placeholder="Enter your Name"><br>
<input class="display-score" type="number" placeholder="What is your score"><br>
<button class='submit-button'>Submit</button>
</div>
`;
formWrapper.appendChild(form);

addList();
reload();