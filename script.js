let curMode = 'light';
let body = document.querySelector('body');
let mode = document.querySelector('#mode');

mode.addEventListener('click', () => {
    if (curMode === 'light'){
        curMode = 'dark';
        console.log(curMode);
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        curMode = 'light';
        console.log(curMode);
        body.classList.add('light');
        body.classList.remove('dark');
    }
});