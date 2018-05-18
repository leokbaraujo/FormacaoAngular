export class ConversaoResponse {
    
    constructor(public base: string,
                public date: string, 
                public rates: any) {}

}

//Exemplo da resposta da api de conversão de moedas
//{"base":"USD", "date":"2017-03-08", "rates":{"BRL":3.1405}}