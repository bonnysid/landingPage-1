function addClassOnWindowChange(width, activeClass, ...elems) {
    if (window.innerWidth <= width) {
        elems.forEach(elem => {
            document.querySelector(elem).classList.add(activeClass);
        });
    } else {
        elems.forEach(elem => {
            document.querySelector(elem).classList.remove(activeClass);
        });
    }

    window.addEventListener('resize', (e) => {
        e.preventDefault();
        if (window.innerWidth <= width) {
            elems.forEach(elem => {
                document.querySelector(elem).classList.add(activeClass);
            });
        } else {
            elems.forEach(elem => {
                document.querySelector(elem).classList.remove(activeClass);
            });
        }
    });
}

export default addClassOnWindowChange;