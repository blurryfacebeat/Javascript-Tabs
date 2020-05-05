// Variables
const items = document.querySelectorAll('.info__item');
const tabs = document.querySelectorAll('.tabs__item');
const info = document.querySelector('.info');

// Hide all blocks, not including those starting with 'number'
function hideItems(number) {
    for (let i = number; i < items.length; i++) {
        items[i].classList.remove('show');
        items[i].classList.add('hide');
    }
}

hideItems(1);

// Shows a block whose serial number is tearing 'number'
function showItems(number) {
    if (items[number].classList.contains('hide')) {
        items[number].classList.remove('hide');
        items[number].classList.add('show');
    }
}

// Hides or shows blocks when clicking on a tab
info.addEventListener('click', (event) => {
    target = event.target;
    if (target && target.classList.contains('tabs__item')) {
        for (let i = 0; i < tabs.length; i++) {
            if (target === tabs[i]) {
                hideItems(0);
                showItems(i);
                break;
            }
        }
    }
});