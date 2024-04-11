// select.js

// Importando os dados dos módulos e inversores
import modulesData from './module.json';
import invertersData from './inverters.json';

// Função para exibir uma janela popup e permitir ao usuário selecionar um módulo e um inversor
export function selectModuleAndInverter() {
    // Exibir lista de módulos e obter seleção do usuário
    const selectedModule = prompt('Selecione um módulo:\n' + modulesData.map(module => module.Nome).join('\n'));
    // Encontrar o módulo selecionado pelos usuários
    const module = modulesData.find(module => module.Nome === selectedModule);

    // Exibir lista de inversores e obter seleção do usuário
    const selectedInverter = prompt('Selecione um inversor:\n' + invertersData.map(inverter => inverter.Nome).join('\n'));
    // Encontrar o inversor selecionado pelos usuários
    const inverter = invertersData.find(inverter => inverter.Nome === selectedInverter);

    // Exibir características do módulo selecionado
    console.log('Módulo Selecionado:');
    console.log('Nome:', module.Nome);
    console.log('Faixa de Potência:', module['Faixa de Potência']);
    console.log('Eficiência:', module.Eficiência);
    console.log('Dimensões:', module.Dimensões);
    console.log('Peso:', module.Peso);
    console.log('Imagem:', module.Imagem);

    // Exibir características do inversor selecionado
    console.log('Inversor Selecionado:');
    console.log('Nome:', inverter.Nome);
    console.log('Máx. potência de entrada recomendada:', inverter['Máx. potência de entrada recomendada']);
    console.log('Máx. tensão de entrada FV:', inverter['Máx. tensão de entrada FV']);
    console.log('Quantidade de MPPTs independentes:', inverter['Quantidade de MPPTs independentes']);
    console.log('Dimensões (L*A*P):', inverter['Dimensões (L*A*P)']);
    console.log('Peso:', inverter.Peso);
    console.log('Imagem:', inverter.Imagem);

    // Retornar o módulo e o inversor selecionados
    return {
        selectedModule,
        selectedInverter
    };
}
