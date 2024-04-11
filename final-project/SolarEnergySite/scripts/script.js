// Importa a função openPopup do arquivo popup.js
import { openPopup } from './popup.js';

// Adiciona listeners para o evento 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", async function () {
    // Carrega dados dos arquivos JSON
    const modulesData = await loadJSON('modules.json');
    const invertersData = await loadJSON('inverters.json');

    // Seleciona elementos DOM
    const slideshowImages = document.querySelectorAll(".slide-image");
    const buttons = document.querySelectorAll(".service-button");
    const serviceInfoBox = document.querySelector(".service-info-box");
    const form = document.getElementById("solar-form");

    // Adiciona listener para o botão 'SELECT INVERTER'
    const selectButton = document.querySelector('.solar-inverter-button');
    selectButton.addEventListener('click', () => {
        console.log('Button clicked!');
        openPopup(modulesData, invertersData);
    });

    // Textos correspondentes aos serviços corretivo e preventivo
    const serviceTexts = [
        "AR TEC Electrical Solutions specializes in a wide range of electrical services, providing comprehensive solutions to meet residential and commercial needs. Our services include electrical installations, ensuring efficient and safe distribution of power in any environment. Additionally, we emphasize our expertise in corrective maintenance, addressing issues promptly to ensure the continuous and reliable operation of electrical systems. Our commitment is to deliver high-quality services tailored to your specific requirements.",
        "At AR TEC, we prioritize corrective electrical services, swiftly addressing and resolving issues in residential, commercial, and industrial environments. Our team of experts is dedicated to ensuring the optimal functioning of electrical systems and the safety of your spaces. With a focus on customer satisfaction, we strive to exceed expectations in every project.",
        "Explore preventive electrical services at AR TEC. Our team is committed to proactively maintaining and safeguarding your electrical systems. From routine inspections to preventative measures, we focus on minimizing risks and ensuring the long-term reliability of your electrical infrastructure. Partner with us for proactive solutions that enhance the performance and longevity of your electrical systems."
    ];

    // Função para atualizar o slide e o texto de acordo com o botão selecionado
    function updateSlide(index) {
        slideshowImages.forEach((image, i) => {
            image.style.display = (i === index) ? "block" : "none";
        });
        serviceInfoBox.innerHTML = `<p>${serviceTexts[index]}</p>`;
    }

    // Adiciona listeners para os botões de serviço
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove("selected"));
            button.classList.add("selected");
            updateSlide(index);
        });
    });

    // Cria um elemento para o fundo de service-info-box
    const backgroundBox = document.createElement("div");
    backgroundBox.classList.add("background-box");
    document.body.appendChild(backgroundBox);

    // Esconde o fundo de service-info-box quando um botão é clicado
    function hideBackgroundBox() {
        backgroundBox.style.display = "none";
    }

    buttons.forEach((button) => {
        button.addEventListener("click", hideBackgroundBox);
    });

    // Inicialmente, mostra o primeiro slide e destaca o primeiro botão
    updateSlide(0);
    buttons[0].classList.add("selected");
});

// Adiciona listener para o evento 'submit' do formulário
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("solar-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos do formulário
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Cria um objeto com os dados do formulário
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        };

        // Envia os dados do formulário para o servidor via AJAX
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "save_data.php"); // Substitua "save_data.php" pelo caminho para o script do servidor que lidará com a solicitação
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log("Data saved successfully.");
            } else {
                console.error("Failed to save data.");
            }
        };
        xhr.send(JSON.stringify(formData));
    });
});