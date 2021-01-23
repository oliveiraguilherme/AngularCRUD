import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response: ResponseCreate | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.userService.createUser(this.request)
    .subscribe(res => {
      this.response = res;
    })
  }

}
