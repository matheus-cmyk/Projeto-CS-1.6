document.addEventListener("DOMContentLoaded", function () {
    // Referências dos elementos
    const tooltips = document.querySelectorAll('.tooltip-video');
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    // Configuração para os tooltips (vídeos)
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', function () {
            const videoSrc = tooltip.getAttribute('data-video');
            if (videoSrc) {
                // Atualizar o src do vídeo
                videoSource.src = videoSrc;
                videoPlayer.load(); // Recarregar o vídeo
                videoContainer.style.display = 'block'; // Mostrar o container do vídeo
                videoPlayer.play(); // Começar a reprodução do vídeo
            }
        });

        tooltip.addEventListener('mousemove', function (e) {
            // Posicionar o vídeo perto do mouse (parte de cima do mouse)
            videoContainer.style.top = (e.pageY - videoContainer.offsetHeight - 10) + 'px'; // Coloca o vídeo acima do mouse
            videoContainer.style.left = (e.pageX + 10) + 'px'; // Posiciona o vídeo ligeiramente à direita do mouse
        });

        tooltip.addEventListener('mouseout', function () {
            videoContainer.style.display = 'none'; // Ocultar o vídeo
            videoPlayer.pause(); // Pausar o vídeo
            videoPlayer.currentTime = 0; // Resetar o tempo do vídeo
        });
    });
});
