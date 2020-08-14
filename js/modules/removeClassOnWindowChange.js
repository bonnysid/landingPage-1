function removeClassOnWindowChange(width, activeClass, ...elems) {
    if (window.innerWidth <= width) {
        elems.forEach(elem => {
            document.querySelector(elem).classList.remove(activeClass);
        });
    } else {
        elems.forEach(elem => {
            document.querySelector(elem).classList.add(activeClass);
        });
    }

    window.addEventListener('resize', (e) => {
        e.preventDefault();
        if (window.innerWidth <= width) {
            elems.forEach(elem => {
                document.querySelector(elem).classList.remove(activeClass);
            });
        } else {
            elems.forEach(elem => {
                document.querySelector(elem).classList.add(activeClass);
            });
        }
    });
}

export default removeClassOnWindowChange;