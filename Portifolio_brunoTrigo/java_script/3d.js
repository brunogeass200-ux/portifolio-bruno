const hero = document.querySelector('.hero-inicial');
const modelo = document.querySelector('#hero-modelo');
const viewer = document.querySelector('#hero-modelo model-viewer');

if (hero && modelo) {
  let targetAngleX = 0;   // Rotação horizontal (0 a 360 graus)
  let targetAngleY = 75;  // Inclinação vertical (câmera)
  let currentAngleX = 0;
  let currentAngleY = 75;

  const atualizarAnimacao = (time = 0) => {
    // Velocidade de resposta mais ágil e viva (0.16)
    currentAngleX += (targetAngleX - currentAngleX) * 0.16;
    currentAngleY += (targetAngleY - currentAngleY) * 0.16;

    // Leve flutuação cósmica no ar
    const floatY = Math.sin(time * 0.002) * 10;
    modelo.style.transform = `translate3d(0, ${floatY}px, 20px)`;

    // Gira a esfera 3D em até 360 graus completos com o mouse!
    if (viewer) {
      viewer.cameraOrbit = `${currentAngleX}deg ${currentAngleY}deg auto`;
    }

    requestAnimationFrame(atualizarAnimacao);
  };

  const onPointerMove = (event) => {
    const rect = hero.getBoundingClientRect();
    // Progresso de 0 (borda esquerda/topo) a 1 (borda direita/base)
    const ratioX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const ratioY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

    // Cruzar o hero da esquerda pra direita gira o planeta 360 graus completos (-180deg a +180deg)
    targetAngleX = (ratioX - 0.5) * 360;

    // Mover em Y agora tem grande amplitude: de 25deg (olhando bem de cima) até 135deg (olhando bem de baixo)
    targetAngleY = 25 + (1 - ratioY) * 110;
  };

  window.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const dentroX = event.clientX >= rect.left && event.clientX <= rect.right;
    const dentroY = event.clientY >= rect.top && event.clientY <= rect.bottom;

    if (dentroX && dentroY) {
      onPointerMove(event);
    }
  });

  requestAnimationFrame(atualizarAnimacao);
}