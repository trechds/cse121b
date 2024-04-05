// wrapper function for querySelector
export function qs(selector) {
    return document.querySelector(selector);
  }
  
  // create an alert at the top of the page for 3 seconds
  // requires the message to be displayed and the time in milliseconds.
  export function alertMessage(message, duration = 3000) {
    const alert = document.createElement("p");
    alert.innerHTML = message;
    alert.setAttribute(
      "style",
      "background-color:lightpink; border: 1px solid red; position:absolute; top:0; left:0; right:0; padding: 1em;"
    );

    // Esta linha insere o elemento <p> (alert) como o primeiro filho do elemento <body> do documento,
    // fazendo com que o alerta seja exibido no topo do corpo da página.
    document.body.prepend(alert);


    /*
    Esta linha utiliza a função setTimeout para agendar a remoção do elemento <p> (alert) do DOM após
    o tempo especificado em duration (em milissegundos). Quando o tempo definido pelo duration expira,
    a função de callback dentro de setTimeout é executada, removendo o parágrafo (alert) do corpo da página (document.body)
    usando removeChild.
    */
    setTimeout(function () {
      document.body.removeChild(alert);
    }, duration);
  }