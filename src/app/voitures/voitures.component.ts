import { Component, OnInit } from '@angular/core';
import {Voiture} from '../model/voiture';
import {VoitureService} from '../services/voiture.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {

  voitures: Voiture[]=[] ;

  constructor(private voitureService:VoitureService,
              private router :Router) { 
    
    //this.voitures= voitureService.listeVoiture();
  }

  supprimerVoiture(v: Voiture){
   
    let conf= confirm ("Are you sure ?");
    if(conf)
      this.voitureService.supprimerVoiture(v.idVoiture).subscribe(() =>{
        console.log("voiture supprimé");
        this.supprimerVoitureDuTableau(v);
      });
  }

  supprimerVoitureDuTableau(voit :Voiture){
    this.voitures.forEach((cur,index) =>{
      if (voit.idVoiture === cur.idVoiture){
        this.voitures.splice(index,1);
      }
    });
  }


  ngOnInit(): void {
    this.voitureService.listeVoiture().subscribe(v =>{
      console.log (v);
      this.voitures=v;

    });
  }

}
