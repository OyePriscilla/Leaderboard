
import displayLearderbord from "./display.js";
const addList = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let displayName = document.querySelector('.display-name').value;
      let displayScore = document.querySelector('.display-score').value;
      if (displayName !== '' && displayScore !== '') {
        displayLearderbord();
      form.reset();
      }
    });
};

export default addList;
