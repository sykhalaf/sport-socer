import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id:any;
  matchInput:any;
  constructor(private activatedRoute: ActivatedRoute,
    private matchService:MatchService) { }

  ngOnInit(): void {
    this.id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      (y) => {
        console.log('data',y);
        this.matchInput = y;
      }
    )
  }
  resultScore(a:number, b:number){
    if (a>b) {
      return 'Win';
    } else if (a<b) {
      return 'Loss';
    } else {
      return 'Draw';
    }
  }

  // selon une valeur, faire un traitement
  matchColor(value:string) {
    switch (value) {
      case 'Win': return 'green';
      case 'Loss': return 'red';
      case 'Draw': return 'blue';  
    }
  }

}
