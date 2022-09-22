const isIntersecting = (entry) => {
    return entry.isIntersecting; //si es true dentro de la pantalla
};

const cargarImagen = (entry) => {
    const container = entry.target; // el container es el DIV
    console.log('se da la accion')
    const imagen = container.firstChild;
    const url = imagen.dataset.src; //
    // carga la imagen
    imagen.src = url;

    observer.unobserve(container) // deja de escuchar la imagen despues que la cargo
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(cargarImagen);
    console.log('carga')
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
};

//queda por hacer un boton "limpiar" de todas las imagenes que carguemos
// realizar que aparezca un cuadro gris en el lugar donde aparece la imagen
// que apaerzca en consola la cantidad de imagenes que se han cargado y total de imagenes que se agregaron