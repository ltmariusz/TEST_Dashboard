import { Component, OnInit } from '@angular/core';
import { AdminManagersService } from 'src/app/services/admin-managers/admin-managers.service';
import { UserData } from 'src/app/services/rest-controllers/admin-managers-rest.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  userList: Array<UserData> = []

  constructor(private adminManagersService :AdminManagersService) { }
    
  ngOnInit(): void {
    this.adminManagersService.listV2()
    .then(list => this.userList = list)
    .catch(e => console.error(e))
    console.log("tu beda dane")
    console.log()
    console.log("tu beda dane2")
  }

}
