function addFunctionOnWindowChange(width, positiveCallback, negativeCallback) {
    if (window.innerWidth <= width) {
        positiveCallback();
    } else {
        negativeCallback();
    }

    window.addEventListener('resize', (e) => {
        e.preventDefault();
        if (window.innerWidth <= width) {
            positiveCallback();
        } else {
            negativeCallback();
        }
    });
}

export default addFunctionOnWindowChange;