// Modelo de Producto Tecnológico con manejo de estructura
class Producto {
    constructor(id, nombre, precio, stock, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.categoria = categoria;
    }
}

console.log("Modelo 'Producto' cargado correctamente en NeoStore.");