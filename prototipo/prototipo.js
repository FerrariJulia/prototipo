/*
TP1-Etapa 2; Prototipo.
 Julia Ferrari, Michelle González,
 Micaela Floch, Lucas Gordillo,
 Pilar Fernández, Martina Furh
 Comisión Matías.
 */

let trazos = [];
let cantidad = 4;
let cant = 20; // cantidad de filas y columnas
let size = 40;
let espaciadoX = 50; // espacio horizontal
let espaciadoY = 5; // espacio vertical
let imgWidth = 60;  // angosto
let imgHeight = 20; // alto
let avance = 0;
let vel = 1;
let estado = "inicial";
let mostrarFilas = []; //arreglo boolean para saber qué filas dibujar

function preload() {
  for (let i = 0; i < cantidad; i++) {
    let ufan = "data/trazo" + nf(i, 2) + ".png";
    trazos[i] = loadImage(ufan);
  }
}

function setup() {
  createCanvas(800, 800);
  //imageMode(CENTER);
  //colorMode(HSB, 360, 100, 100);
  background(255);
  for (let i = 0; i < cant; i++) {
    mostrarFilas[i] = true; 
  }
}

function draw() {
  background(255); 

  avance += vel;
  if (avance > imgWidth + espaciadoX) {
    avance = 0; // resetea el avance para que la animación se repita
  }

  for (let i = 0; i < cant; i++) {
    if (!mostrarFilas[i]) continue; // no dibujar si es false

    for (let g = 0; g < cant; g++) {
      let desplazamientoX = (i % 2 === 1) ? imgWidth / 2 : 0;
      let x = g * (imgWidth + espaciadoX) + imgWidth / 2 + desplazamientoX - avance;
      let y = i * (imgHeight + espaciadoY) + imgHeight / 2;

      let img = trazos[0];
      image(img, x, y, imgWidth, imgHeight);
    }
  }
  
   if (estado === "inicial") {
    for (let i = 0; i < cant; i++) {
      mostrarFilas[i] = true; // todas visibles
    }
  }
  else if (estado === "sinfilas") {
    for (let i = 0; i < cant; i++) {
      mostrarFilas[i] = (i % 2 === 0); // solo filas pares visibles
    }
  }
  
  else if (estado== "pegarextremo"){
    
    //...
    
  }


  if (keyIsDown(49)) { // tecla 1
    estado = "sinfilas";
  } else {
    estado = "inicial";
  }
}
 
