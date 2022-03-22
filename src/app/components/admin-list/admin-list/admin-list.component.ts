import { Component, OnInit } from '@angular/core';
import { AdminManagersService } from 'src/app/services/admin-managers/admin-managers.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  constructor(private adminManagersService :AdminManagersService) { }
    
  ngOnInit(): void {
    this.adminManagersService.list()
    
  }

}
