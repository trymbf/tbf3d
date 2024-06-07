// Dynamic projects cards
window.addEventListener('resize', adjustColumns);
window.addEventListener('load', adjustColumns);

function adjustColumns() {
    var width = window.innerWidth;
    var cols = document.querySelectorAll('.dynamic-col');

    console.log(width);

    cols.forEach(function(col) {
        if (width < 1500) { // Adjust as needed
            col.classList.remove('col-md-2');
            col.classList.add('col-md-3');''
        } else {
            col.classList.remove('col-md-3');
            col.classList.add('col-md-2');
        }
    });
}