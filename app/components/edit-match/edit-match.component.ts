import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  id:any;
  match:any;
  matchForm:FormGroup;
  constructor(
    private activatedRoute:ActivatedRoute,
    private matchService:MatchService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.matchForm = this.formBuilder.group({
      name:[''],
      poste:[''],
      description:[''],
      image:['']
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        console.log('data from db', data);
        this.match = data;
      }
    )
  }

  validateEdit() {
    this.matchService.editmatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

}
