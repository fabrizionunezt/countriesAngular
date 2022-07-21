import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Paises } from './models/paises';
import data from 'src/assets/data/countries.json';
import dataComida from 'src/assets/data/countries-dishes.json';
import { ComidaPaises } from './models/comidaPaises';
import { ThisReceiver } from '@angular/compiler';
import { ImagenesComida } from './models/imagenesComida';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private cliente: HttpClient) {}

  obtenerPaises(): Observable<Paises[]> {
    let paises: Paises[] = data;
    return of(paises);
    //return this.cliente.get<Paises[]>('api/paises');
  }

  obtenerComidaPaises(pais: string) {
    let comidaPaises: ComidaPaises[] = dataComida;
    return of(comidaPaises.find((x) => x.country == pais));
    //return this.cliente.get<ComidaPaises[]>('api/comidaPaises');
  }

  obtenerImagenesComida(comida: string, pais: string) {
    let secureComida = comida.split(' ').join('');
    secureComida = secureComida.split(',')[0];
    let securePais = pais.split(' ').length > 1 ? '' : pais;
    return this.cliente.get<ImagenesComida>(
      `https://pixabay.com/api/?key=28768747-682b48a12e4746f0394313291&q=food+${secureComida}${
        securePais != '' ? '+' + securePais : ''
      }&image_type=photo&pretty=true&per_page=5`
    );
  }
}
