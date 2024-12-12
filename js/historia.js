document.addEventListener("DOMContentLoaded", function () {
    // Selecionando os elementos com a classe "tooltip"
    const tooltips = document.querySelectorAll('.tooltip');
    const tooltipImgContainer = document.createElement('div');
    tooltipImgContainer.classList.add('tooltip-img');
    document.body.appendChild(tooltipImgContainer);

    // Configuração para os tooltips
    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('mouseover', function () {
            const imgSrc = tooltip.getAttribute('data-img');
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            tooltipImgContainer.innerHTML = ''; // Limpar qualquer imagem anterior
            tooltipImgContainer.appendChild(imgElement);
            tooltipImgContainer.style.display = 'block';
        });

        tooltip.addEventListener('mousemove', function (e) {
            tooltipImgContainer.style.top = e.pageY + 10 + 'px';
            tooltipImgContainer.style.left = e.pageX + 10 + 'px';
        });

        tooltip.addEventListener('mouseout', function () {
            tooltipImgContainer.style.display = 'none';
        });
    });
});
