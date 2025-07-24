document.addEventListener('DOMContentLoaded', function () {
    // === BOTÕES DE MUDANÇA DE FILMES ===
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const positionAtual = window.scrollY;

        if(positionAtual < alturaHero){
            hiddenHeader();
        }else{
            onHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            hiddenAbs();
            aba.classList.add('shows__list--is--active');
            removeButton(buttons);
            botao.target.classList.add('shows__tabs__button--is--active');
        });
    }

    // === FAQ INTERATIVO ===
    const faqItems = document.querySelectorAll('.faq__questions__item');

    faqItems.forEach((item) => {
        const question = item.querySelector('[data-faq-question]');

        question.addEventListener('click', () => {
            // Fecha os outros itens
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('faq__questions__item--is--open');
                }
            });

            // Alterna o item clicado
            item.classList.toggle('faq__questions__item--is--open');
        });
    });
});

function hiddenHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function onHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

// === FUNÇÕES AUXILIARES ===
function openOrClosed(elemento) {
    const classe = 'data__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeButton(buttonsArray) {
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].classList.remove('shows__tabs__button--is--active');
    }
}

function hiddenAbs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}
