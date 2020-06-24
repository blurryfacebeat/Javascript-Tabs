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

// Second variant
// document.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabheader__item');
//     const tabsContent = document.querySelectorAll('.tabcontent');
//     const tabsWrapper = document.querySelector('.tabheader__items');
    
//     hideContent();
//     showContent();

//     tabsWrapper.addEventListener('click', event => {
//         const target = event.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideContent();
//                     showContent(i);
//                 }
//             });
//         }
//     });

//     function hideContent() {
//         tabsContent.forEach(item => {
//             item.style.display = 'none';
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showContent(index = 0) {
//         tabsContent[index].style.display = 'block';
//         tabs[index].classList.add('tabheader__item_active');
//     }
// });
