import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id:any;
  user:any;
  userForm:FormGroup;
  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name:[''],
      poste:[''],
      description:[''],
      image:['']
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      data => {
        console.log('data from db', data);
        this.user = data;
      }
    )
  }

  validateEdit() {
    this.userService.editUser(this.user).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

}
