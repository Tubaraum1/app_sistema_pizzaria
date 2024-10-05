document.addEventListener("DOMContentLoaded", function() {
    const backBtn = document.getElementById('backBtn');
    
    backBtn.addEventListener('click', function() {
        window.history.back();
    });

    const mensagem = document.getElementById('mensagem');

    if (mensagem) {
        mensagem.textContent = 'Aqui você pode exibir informações adicionais sobre o artigo.';
    }
});
