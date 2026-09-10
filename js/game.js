function verificar(respostaCorreta, proximaPagina){

    const normalizar = (texto) => texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const resposta = normalizar(document.getElementById("resposta").value);
    const correta = normalizar(respostaCorreta);

    if(resposta === correta){
        const mensagem = document.getElementById("mensagem-resultado");
        if (mensagem) {
            mensagem.textContent = "correto";
            mensagem.style.color = "#ff0000";
            mensagem.style.display = "block";
        }

        if (typeof Storage !== 'undefined') {
            let faseKey = 'fase3-resposta';
            if (window.location.pathname.includes('fase4')) faseKey = 'fase4-resposta';
            if (window.location.pathname.includes('fase5')) faseKey = 'fase5-resposta';
            localStorage.setItem(faseKey, document.getElementById('resposta').value.trim());
        }

        setTimeout(() => {
            window.location.href = proximaPagina;
        }, 800);
    }else{
        alert("Incorreto.");
    }
}