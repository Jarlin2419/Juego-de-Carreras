const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');

// Moto del jugador
const moto = {
    x: 50,
    y: canvas.height / 2,
    ancho: 30,
    alto: 20,
    velocidad: 5,
    imagen: new Image()
};

moto.imagen.src = 'C:/Users/Yesica Lorena/Downloads/Juego de Carreras/istockphoto-481436112-612x612.jpg';

// Corredores
const corredores = [
  {
    x: 100,
    y: canvas.height / 2 - 50,
    ancho: 30,
    alto: 20,
    velocidad: 3,
    imagen: new Image(),
  },
  {
    x: 150,
    y: canvas.height / 2 + 50,
    ancho: 30,
    alto: 20,
    velocidad: 4,
    imagen: new Image(),
  },
  // Agrega más corredores según sea necesario
];

corredores.forEach((corredor) => {
  corredor.imagen.src = '"C:/Users/Yesica Lorena/Downloads/Juego de Carreras/istockphoto-187133277-612x612.jpg"';
});

// Funciones de dibujo
function dibujarMoto() {
    ctx.drawImage(moto.imagen, moto.x, moto.y, moto.ancho, moto.alto);
}

function dibujarCorredores() {
  corredores.forEach((corredor) => {
    ctx.drawImage(corredor.imagen, corredor.x, corredor.y, corredor.ancho, corredor.alto);
  });
}

// Funciones de actualización
function actualizarCorredores() {
  corredores.forEach((corredor) => {
    corredor.x += corredor.velocidad;
    if (corredor.x > canvas.width) {
      corredor.x = -corredor.ancho;
    }
  });
}

// Lógica de colisión
function detectarColision() {
  corredores.forEach((corredor) => {
    if (
      moto.x < corredor.x + corredor.ancho &&
      moto.x + moto.ancho > corredor.x &&
      moto.y < corredor.y + corredor.alto &&
      moto.y + moto.alto > corredor.y
    ) {
      alert('¡Choque!');
      // Aquí puedes agregar lógica para reiniciar el juego o mostrar un mensaje de "Game Over"
    }
  });
}

// Bucle del juego
function actualizarJuego() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarMoto();
    actualizarCorredores();
    dibujarCorredores();
    detectarColision();
    requestAnimationFrame(actualizarJuego);
}

// Controles del jugador
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowUp') {
        moto.y -= moto.velocidad;
    }
    if (evento.key === 'ArrowDown') {
        moto.y += moto.velocidad;
    }
});

// Iniciar el juego
actualizarJuego();