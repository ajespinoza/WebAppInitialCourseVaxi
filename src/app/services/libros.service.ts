import { Subject } from "rxjs";

export class LibrosService {

  librosSubject = new Subject();
  private libros = ['Libro 1', 'Libro aritmética', 'El gráfico'];

  agregarLibro(titulo: string) {
    this.libros.push(titulo);
    this.librosSubject.next(this.libros);
  }

  eliminarLibros(titulo: string){
    this.libros = this.libros.filter(x => x !== titulo);
    this.librosSubject.next(null);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
