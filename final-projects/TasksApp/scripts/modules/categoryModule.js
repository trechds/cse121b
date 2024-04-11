// categoryModule.js

// Definindo os tipos de categoria e seus pontos correspondentes
const categoryPoints = {
    Simple: 10,
    Complex: 25,
    Goal: 50
  };
  
  // Função para adicionar uma nova categoria de task
  const addCategory = (name, points) => {
    categoryPoints[name] = points;
  };
  
  // Exportando as funções
  export { addCategory, categoryPoints };
  