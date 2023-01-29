window.onload = () => {
    const grid = document.querySelector('.grid');
    const msnry = new Masonry(grid, {
        // options
        itemSelector: '.grid-item',
        gutter: 5,
        columnWidth: 335,
        fitWidth: true,
    });
    // grid.imagesLoaded().progress( function() {
    //     grid.masonry();
    // });
}
