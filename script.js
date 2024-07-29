document.getElementById('startButton').addEventListener('click', function() {
    createIcons();

    setTimeout(stopAnimation, 2000);
});

function createIcons() {
    const iconContainer = document.getElementById('iconContainer');

    for (let i = 0; i < 50; i++) {
        const icon = document.createElement('div'); 
        icon.classList.add('icon');
        
        
        const image = document.createElement('img');
        image.src = './src/files/icon_rain-2.png';
        image.alt = './src/files/icon-link-2.png'; 
        icon.appendChild(image);
        
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.animationDuration = `${Math.random() * 2 + 1}s`;
        iconContainer.appendChild(icon);

        icon.addEventListener('animationiteration', function() {
            icon.style.left = `${Math.random() * 100}vw`;
        });
    }
}

function stopAnimation() {
    const iconContainer = document.getElementById('iconContainer');


    iconContainer.classList.add('fadeOut');

    setTimeout(function() {
        while (iconContainer.firstChild) {
            iconContainer.removeChild(iconContainer.firstChild);
        }
        
        iconContainer.classList.remove('fadeOut');
    }, 1000); 
}

function sincronizarInputName(valor) {
    document.getElementById('input2').value = valor;    
}

function sincronizarInputEmail(valor2) {
    document.getElementById('input4').value = valor2;
}

function sincronizarInputText(valor3) {
    document.getElementById('input6').value = valor3;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');

    acceptButton.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
    });


});

// function enviarFormulario() {
//     // valores
//     var nome = document.getElementById('input1').value;
//     var email = document.getElementById('input3').value;
//     var mensagem = document.getElementById('input5').value;

//     document.getElementById('input1').value = nome;
//     document.getElementById('input3').value = email;
//     document.getElementById('input5').value = mensagem;

//     fetch('https://formsubmit.co/contato@jobbpp.com', {
//         method: 'POST',
//         body: new FormData(document.getElementById('myForm'))
//     })
// }