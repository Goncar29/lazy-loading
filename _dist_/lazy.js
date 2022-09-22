const isIntersecting = (entry) => {
    return entry.isIntersecting; //si es true dentro de la pantalla
};

const accion = (entry) => {
    const nodo = entry.target
    console.log('se da la accion')

    observer.unobserve(nodo) // deja de escuchar la imagen despues que la cargo
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
};