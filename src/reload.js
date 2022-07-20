const refresh = document.querySelector('.refresh');
const reload = () => {
    refresh.addEventListener('click', () => {
       location.reload();
    });
};

export default reload;