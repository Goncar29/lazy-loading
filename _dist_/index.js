import { registerImage } from './lazy.js'

const min = 1
const max = 123
const random = () => Math.floor(Math.random() * (max - min) + min)


const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; 
    // esto lo pasamos a lazy.js

    container.appendChild(imagen);

    return container;
}


const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');

const addButton = document.querySelector('#agregarImagen');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener('click', addImage);


// Eliminamos de a una imagen creadas, la primera en fila
const borra = document.querySelector('#borrarUno')
const borrarUno = () => {
    const aEliminar = document.querySelector('div.p-4')
    aEliminar.remove()
    console.log('Se borra un elemento')
}

borra.addEventListener('click', borrarUno)

// Eliminamos todas las imagenes creadas
const limpiarImagenes = document.querySelector('#limpiarImagenes')
const cleanImages = () => {

    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 

}

limpiarImagenes.addEventListener('click', cleanImages)
