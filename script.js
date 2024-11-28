document.addEventListener("DOMContentLoaded", () => {
    // Formulário de Contato
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Sua mensagem foi enviada! Entraremos em contato com você em breve :)");
        form.reset(); // Reseta o formulário após o envio
    });
});