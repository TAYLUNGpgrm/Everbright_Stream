document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            hiddenAbs();
            aba.classList.add('shows__list--is--active');
            removeButton(buttons); // Passa 'buttons' como argumento
            botao.target.classList.add('shows__tabs__button--is--active');
        })
    }
})

function removeButton(buttonsArray) { // Recebe os botões como argumento
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].classList.remove('shows__tabs__button--is--active'); // Correção aqui também
    }
}

function hiddenAbs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}