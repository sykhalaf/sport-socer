import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  id: any;
  user: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      (y) => {
        console.log('data', y);
        this.user = y;
      }
    )

  }
}
