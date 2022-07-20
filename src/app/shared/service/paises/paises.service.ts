import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Paises } from './models/paises';
import data from 'src/assets/data/countries.json'
import dataComida from 'src/assets/data/countries-dishes.json'
import { ComidaPaises } from './models/comidaPaises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private cliente: HttpClient) { }

  obtenerPaises():Observable<Paises[]>{
    let paises: Paises[] = data
    return of(paises)
    //return this.cliente.get<Paises[]>('api/paises');
  }

  obtenerComidaPaises(pais:string){
    let comidaPaises: ComidaPaises[] = dataComida
    return of(comidaPaises.find(x => x.country == pais))
    //return this.cliente.get<ComidaPaises[]>('api/comidaPaises');

  }


}
