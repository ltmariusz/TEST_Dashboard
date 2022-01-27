import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserControlerService } from 'src/app/services/global/user-controller.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menuShow: boolean = false


  constructor(
    private sidebarService: NbSidebarService,
    private userControlerService: UserControlerService) { }

  ngOnInit(): void {
  }

  getUserName():string{
    let name = this.userControlerService.getName()
    let surname = this.userControlerService.getSurname()
    if (name && surname) {
      return name +" "+ surname
    }else{
      return "--"
    }
  }

  /**
   * Menu przycisk
   */
   showMenu() {
    console.log(this.menuShow)
    this.menuShow = !this.menuShow
    this.sidebarService.toggle(false, 'sidebar')
    console.log(this.menuShow)
  }

  items = [
    { title: 'Zmień hasło',
      link: '/pages/password',
      icon: 'settings-2-outline'},
    { title: 'Logout',
      link: '',
      icon: 'log-out-outline'}
  ]

  // toggle(){
  //   this.sidebarService.toggle(false, 'navi')
  //   console.log("ruch")
  // }


}
