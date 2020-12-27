import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Voiture} from '../model/voiture';
import {HttpClient ,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';

const httpOptions ={
  headers :new HttpHeaders ({'Content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL :string='http://localhost:8080/voiture/api';

  voitures: Voiture[]=[] ;

  //voiture : Voiture | undefined;
  
  constructor(private http :HttpClient) {
   /* this.voitures=[{idVoiture:1 ,nomVoiture:"BMW", prixVoiture :300.500 ,dateCreation :new Date("10/04/2020")},
                  {idVoiture :2 ,nomVoiture:"citroen", prixVoiture :5700 ,dateCreation :new Date("10/04/2019")} ] ;
*/
  }

  listeVoiture():Observable<Voiture[]>{
    return this.http.get<Voiture[]>(this.apiURL);
  }

  ajouterVoiture(voit: Voiture):Observable<Voiture>{
    return this.http.post<Voiture>(this.apiURL,voit,httpOptions);
  }


  supprimerVoiture(id :number){
    const url = '${this.apiURL}/${id}';
    return this.http.delete(url,httpOptions);
  }



  consulterVoiture(id:number):Observable<Voiture>{
    const url = '${this.apiURL}/${id}';
    return this.http.get<Voiture>(url);
  }

  updateVoiture(v : Voiture) : Observable <Voiture>{
    return this.http.put<Voiture>(this.apiURL,v,httpOptions);


  }

  trierVoiture(){
    this.voitures = this.voitures.sort((n1,n2) => {
      if (n1.idVoiture > n2.idVoiture) {
          return 1;
      }
  
      if (n1.idVoiture < n2.idVoiture) {
          return -1;
      }
  
      return 0;
  });
  }
}