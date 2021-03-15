const drop_button = document.querySelector('.drop-text');
const drop_content = document.querySelector('.drop-content');

drop_button.addEventListener('click',  () => {
    drop_content.classList.toggle('show');
});