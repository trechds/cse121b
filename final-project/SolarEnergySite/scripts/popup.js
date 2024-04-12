// popup.js

// Função para carregar os dados do arquivo JSON
async function loadJSON(filename) {
    const response = await fetch(filename);
    const data = await response.json();
    console.log(`Loaded JSON from ${filename}:`, data); // Adicionando um log para verificar se os dados foram carregados
    return data;
}

// Função para criar as opções da lista suspensa
function createOptions(data, selectElement) {
    data.forEach(item => {
        const option = document.createElement('option');
        option.text = item.Nome;
        option.value = JSON.stringify(item);
        selectElement.add(option);
    });
}

// Função para exibir os detalhes do item selecionado
function displayDetails(selectedItem, detailContainer) {
    const item = JSON.parse(selectedItem);
    detailContainer.innerHTML = '';

    for (const [key, value] of Object.entries(item)) {
        const row = document.createElement('div');
        row.classList.add('detail-row');
        const label = document.createElement('span');
        label.textContent = `${key}: `;
        const data = document.createElement('span');
        data.textContent = value;
        row.appendChild(label);
        row.appendChild(data);
        detailContainer.appendChild(row);
    }
}

// Função principal para abrir a janela pop-up
export async function openPopup(modulesData, invertersData) {
    console.log('Opening popup...');
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    const moduleSelect = document.createElement('select');
    moduleSelect.classList.add('module-select');
    createOptions(modulesData, moduleSelect);
    popupContainer.appendChild(moduleSelect);

    const inverterSelect = document.createElement('select');
    inverterSelect.classList.add('inverter-select');
    createOptions(invertersData, inverterSelect);
    popupContainer.appendChild(inverterSelect);

    const moduleImage = document.createElement('img');
    moduleImage.classList.add('module-image');
    popupContainer.appendChild(moduleImage);

    const inverterImage = document.createElement('img');
    inverterImage.classList.add('inverter-image');
    popupContainer.appendChild(inverterImage);

    const detailContainer = document.createElement('div');
    detailContainer.classList.add('detail-container');
    popupContainer.appendChild(detailContainer);

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => {
        document.body.removeChild(popupContainer);
    });
    popupContainer.appendChild(doneButton);

    document.body.appendChild(popupContainer);

    moduleSelect.addEventListener('change', () => {
        const selectedItem = moduleSelect.options[moduleSelect.selectedIndex].value;
        displayDetails(selectedItem, detailContainer);
        const item = JSON.parse(selectedItem);
        moduleImage.src = item.Imagem;
    });

    inverterSelect.addEventListener('change', () => {
        const selectedItem = inverterSelect.options[inverterSelect.selectedIndex].value;
        displayDetails(selectedItem, detailContainer);
        const item = JSON.parse(selectedItem);
        inverterImage.src = item.Imagem;
    });
}

// Carregar os dados dos arquivos JSON e abrir a janela pop-up
document.addEventListener('DOMContentLoaded', async () => {
    const modulesData = await loadJSON('modules.json');
    const invertersData = await loadJSON('inverters.json');

    const selectButton = document.querySelector('.solar-inverter-button');
    selectButton.addEventListener('click', () => {
        openPopup(modulesData.modules, invertersData.inverters);
    });
});

export { openPopup };