import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture';
import  {VoitureService} from '../services/voiture.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  newVoiture=new Voiture();
  message!: string;
  
 

  constructor(private voitureService:VoitureService,
    private router :Router ) { }

  addVoiture(){
    
    this.voitureService.ajouterVoiture(this.newVoiture).subscribe(voit =>{
      console.log(voit);
    });
    this.router.navigate(['voitures']).then(()=> {
      window.location.reload();
    });
  }

  ngOnInit(): void {
  }

}
