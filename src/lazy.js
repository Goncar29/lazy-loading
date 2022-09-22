const isIntersecting = (entry) => {
    return entry.isIntersecting; //si es true dentro de la pantalla
};

const accion = (entry) => {
    const container = entry.target; // el container es el DIV
    console.log('se da la accion')
    const image = container.firstChild;
    const url = imagen.dataset.src; //
    // carga la imagen
    imagen.src = url;

    observer.unobserve(container) // deja de escuchar la imagen despues que la cargo
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
};