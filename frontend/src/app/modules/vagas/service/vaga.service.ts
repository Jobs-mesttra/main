import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs";
import { environment } from "src/environments/environment";
import { IVaga } from "../model/IVaga";

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private httpClient: HttpClient) { }

  public findVagas(pesquisa: string) {
    const url = environment.domain + 'vagas?pesquisa=' + pesquisa;

    return this.httpClient.get<IVaga[]>(url)
      .pipe(tap(vaga => console.log(vaga)));
  }
}
