import addClassOnWindowChange from './modules/addClassOnWindowChange';
import addFunctionOnWindowChange from './modules/addFunctionOnWindowChange';
import removeClassOnWindowChange from './modules/removeClassOnWindowChange';

window.addEventListener('DOMContentLoaded', () => {
    const contactInfo = document.querySelector('.contact__info');
    const contact = document.querySelector('.contact .content__part.pt-65.sb');
    const footer = document.querySelector('footer .container');
    const header = document.querySelector('.header .container');
    const headerMenu = document.querySelector('.header__nav');
    const headerBurger = header.querySelector('.header__burger');
    const filterBtn = document.querySelector('.filter-btn');
    const portMenu = document.querySelector('.portfolio__menu');
    const shadow = document.querySelector('.shadow');
    const portClose = document.querySelector('.portfolio__close');


    headerBurger.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenu.classList.toggle('active');
        shadow.classList.toggle('active');
        document.body.classList.toggle('lock');
    });

    filterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        portMenu.classList.toggle('active');
        shadow.classList.toggle('active');
        document.body.classList.toggle('lock');
    });

    shadow.addEventListener('click', () => {
        headerMenu.classList.remove('active');
        portMenu.classList.remove('active');
        shadow.classList.remove('active');
        document.body.classList.remove('lock');
    });

    portClose.addEventListener('click', () => {
        portMenu.classList.remove('active');
        shadow.classList.remove('active');
        document.body.classList.remove('lock');
    });

    addClassOnWindowChange(1160, "center", ".about .content__block", ".home .content__block");
    addClassOnWindowChange(1160, "mt-50", ".about .content__row");
    addFunctionOnWindowChange(1050, () => footer.before(contactInfo), () => contact.append(contactInfo));
    addFunctionOnWindowChange(512, () => header.after(headerMenu), () => header.append(headerMenu));
});