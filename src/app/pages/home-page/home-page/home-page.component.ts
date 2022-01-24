import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menuShow: boolean = false


  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
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
    { icon: 'log-out-outline',
      title: 'Logout',
      link: '',
      }
  ]

  // toggle(){
  //   this.sidebarService.toggle(false, 'navi')
  //   console.log("ruch")
  // }


}
