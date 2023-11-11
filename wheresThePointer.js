// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const tableForCoords = document.getElementsByTagName('table')[0];

tableForCoords.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'td') {
        let td = e.target;
        tdCoords = `${e.clientX}, ${e.clientY}`;
        td.innerHTML = tdCoords;
    }
});
