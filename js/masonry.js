window.onload = () => {
    const grid = document.querySelector('.grid');
    const msnry = new Masonry(grid, {
        // options
        itemSelector: '.grid-item',
        gutter: 5,
        columnWidth: 335,
        fitWidth: true
    });
}

// const toggle = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// console.log('toggle', toggle)
// toggle.addEventListener('click', () =>
//     navbarLinks.classList.toggle('active'))

// const $grid = $('.grid').masonry({
//     itemSelector: '.grid-item',
//     gutter: 5,
//     columnWidth: 335,
//     // options...
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress(function () {
//     $grid.masonry('layout');
// });
