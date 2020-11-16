import { Router } from '@angular/router';
import { PlayerService } from './../../services/player.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private playerService:PlayerService,
    private router:Router
    ) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name: ['',Validators.minLength(5)],
      poste: ['', Validators.required],
      description: [''],
      dateOfBirth: [''],
      image: ['']
    })
  }

  addPlayer(player:any) {
    console.log('This is my player', player);
    this.playerService.addPlayer(player).subscribe(
      ()=> {
        console.log('Added player successfully');
        this.router.navigate(['players']);
      }
    )
  }

}
