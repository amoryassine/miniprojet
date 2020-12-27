import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VoitureService} from '../services/voiture.service';
import {Voiture} from '../model/voiture';
@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles: [
  ]
})
export class UpdateVoitureComponent implements OnInit {

  currentVoiture =new Voiture();
  constructor(private activatedRoute :ActivatedRoute,
              private router :Router,
              private voitureService: VoitureService) { }

  ngOnInit() {
    this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params.id).
                                        subscribe(voit => {this.currentVoiture =voit ;});

  }
  updateVoiture(){
    this.voitureService.updateVoiture(this.currentVoiture).subscribe(v => {
      this.router.navigate(['voitures']);
    },(error) => { alert ("Problem lors de la modification !");}
    );
    
  }

}
