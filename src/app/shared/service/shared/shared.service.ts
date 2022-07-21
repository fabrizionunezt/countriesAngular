import { EventEmitter, Injectable, Output } from '@angular/core';
import { Paises } from '../paises/models/paises';
import { PaisesService } from '../paises/paises.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  @Output() paisSeleccionado = new EventEmitter<Paises>()
  paisElegido!: Paises;
  constructor(private paisesService: PaisesService) {
    this.setearPaisDefecto();
  }

  setearPaisDefecto(){
    this.paisesService.obtenerPaises().subscribe((x) => {
      if (x) {
        let valor = x.find(x => x.name.toLowerCase() == 'argentina');
        if(valor){
          this.actualizarPaisSeleccionado(valor);
        }
      }
    });
  }

  actualizarPaisSeleccionado(pais: Paises) {
    this.paisElegido = pais;
    this.paisSeleccionado.emit(this.paisElegido);
  }
}
