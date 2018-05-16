import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {
  Conversao,
  ConversaoResponse
} from '../models';


@Injectable()
export class ConversorService {

  private readonly BASE_URL = 'http://data.fixer.io/api/latest?access_key=a64fa4bfdec63e72668206c014a9c6b5';

  constructor(private http: Http) { }

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    //let params = `&symbols=${conversao.moedaDe},${conversao.moedaPara}`; modelo não mais utilizado pela api
    let params = `&symbols=${conversao.moedaPara}`;
    return this.http
               .get(`${this.BASE_URL}${params}`)
               .map(response => response.json() as ConversaoResponse)
               .catch(error => Observable.throw(error));
  }

  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if(conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if(conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if(conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }

}
