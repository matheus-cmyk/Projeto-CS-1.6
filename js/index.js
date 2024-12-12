// Função para validar o formulário de login
document.querySelector("form").addEventListener("submit", function(event) {
    // Previne o envio do formulário, para validação
    event.preventDefault();

    // Obtendo os valores dos campos de entrada
    const username = document.getElementById("username").value;
    const senha = document.getElementById("senha").value;

    // Verificando se os campos estão vazios
    if (username === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Caso os campos estejam preenchidos, podemos simular o envio
        alert("Login realizado com sucesso!");
        // Aqui, você pode adicionar a lógica de envio do formulário para o servidor, como:
        // this.submit(); // Isso envia o formulário
    }
});