import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {

  libros = ['Matematicas 1', 'Algoritmos básicos', 'Álgebra lineal'];

  eliminarLibro(libro: string){
    this.libros = this.libros.filter( x => x !== libro);
  }

  guardarLibro(f){
    if(f.valid){
      this.libros.push(f.value.nombreLibro);
    }
  }
}
