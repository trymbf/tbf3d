// Dynamic projects cards
window.addEventListener('resize', adjustColumns); // Adjust columns on resize
window.addEventListener('load', adjustColumns); // Adjust columns on load

function adjustColumns() {
    // Optain window width and all columns
    var width = window.innerWidth;
    var cols = document.querySelectorAll('.dynamic-col');

    cols.forEach(function(col) { // Iterate over all columns
        if (width <= 768) { // It's likely a mobile device
            col.classList.remove('col-md-2', 'col-md-3');
            col.classList.add('col-12'); // Use 1 card per row on mobile devices
        } else if (width < 1500) { // Adjust as needed
            col.classList.remove('col-md-2', 'col-12');
            col.classList.add('col-md-3');
        } else {
            col.classList.remove('col-md-3', 'col-12');
            col.classList.add('col-md-2');
        }
    });
}