const grid = document.querySelector('.grid');
const msnry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    gutter: 5,
    columnWidth: 335,
    fitWidth: true
});

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

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>
    navbarLinks.classList.toggle('active'))

// const msnry = new Masonry('.grid', {
//     itemSelector: '.grid-item',
//     gutter: 10,
//     columnWidth: 300
//     // options
// });

// window.onload = () => {
//     const grid = document.querySelector('.grid');
//
//     const masonry = new Masonry(grid, {
//         itemSelector: '.grid-item',
//         gutter: 10,
//         columnWidth: 400
//     });
// }
//
// masonry.on('layoutComplete', () => console.log())