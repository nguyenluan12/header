const header = document.querySelector('.header');
console.log(header);
const iconButton = document.querySelector('.icon_button');
console.log(document);
const menuUl = document.querySelector('.menu ul');

iconButton.addEventListener('click', () => {
    if (menuUl.style.display === 'block') {
        menuUl.style.display = 'none';
    } else {
        menuUl.style.display = 'block';
    }
});

