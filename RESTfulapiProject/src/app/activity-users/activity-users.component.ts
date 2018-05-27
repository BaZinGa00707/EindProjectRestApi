import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-users',
  templateUrl: './activity-users.component.html',
  styleUrls: ['./activity-users.component.css']
})
export class ActivityUsersComponent implements OnInit {

 email:string;
 pass:string;

  constructor() { }

  ngOnInit() {
  }

}
