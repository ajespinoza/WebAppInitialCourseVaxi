import { Component, Input, EventEmitter, Output } from "@angular/core";
import { LibrosService } from "../services/libros.service";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent{
  @Input() tituloLibro: string;

  constructor(private librosService: LibrosService){
    this.tituloLibro = '';
  }

  onClicked(){
    this.librosService.eliminarLibros(this.tituloLibro)
  }

}
