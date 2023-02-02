const sidebar_items = document.querySelectorAll('.sidebar__item');

for (const item of sidebar_items) {
    item.addEventListener('mouseenter', handleEnter);
    item.addEventListener('mouseleave', handleLeave);
}

function handleEnter(e){
    e.target.classList.add('sidebar__item--hover');
    e.target.firstElementChild.classList.add('sidebar__icon--hover');
}

function handleLeave(e){
    e.target.classList.remove('sidebar__item--hover');
    e.target.firstElementChild.classList.remove('sidebar__icon--hover');
}