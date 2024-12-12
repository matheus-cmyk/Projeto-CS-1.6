// Função para validar o formulário de cadastro
document.querySelector("form").addEventListener("submit", function(event) {
    // Previne o envio do formulário, para validação
    event.preventDefault();

    // Obtendo os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    // Validação dos campos
    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Tente novamente.");
    } else {
        // Caso todos os campos sejam preenchidos corretamente
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode enviar o formulário ou realizar outras ações
        // this.submit(); // Descomente isso para enviar o formulário
    }
});
