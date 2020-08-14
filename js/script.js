import addClassOnWindowChange from './modules/addClassOnWindowChange';
import addFunctionOnWindowChange from './modules/addFunctionOnWindowChange';
import removeClassOnWindowChange from './modules/removeClassOnWindowChange';

window.addEventListener('DOMContentLoaded', () => {
    const contactInfo = document.querySelector('.contact__info');
    const contact = document.querySelector('.contact .content__part.pt-65.sb');
    const footer = document.querySelector('footer .container');



    addClassOnWindowChange(1160, "center", ".about .content__block", ".home .content__block");
    addClassOnWindowChange(1160, "mt-50", ".about .content__row");
    addFunctionOnWindowChange(1050, () => footer.before(contactInfo), () => contact.append(contactInfo));

});