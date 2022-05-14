export class LibrosService {
  private libros = ['Libro 1', 'Libro aritmética', 'El gráfico'];

  agregarLibro(titulo: string) {
    this.libros.push(titulo);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
