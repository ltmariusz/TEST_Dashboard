import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menuShow: boolean = false

  // tu skonczyles  https://akveo.github.io/nebular/docs/components/layout/overview#nblayoutheadercomponent
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }


  /**
   * Menu przycisk
   */
   showMenu() {
    console.log(this.menuShow)
    this.menuShow = !this.menuShow
    this.sidebarService.toggle(false, 'navi')
    console.log(this.menuShow)
  }

  // toggle(){
  //   this.sidebarService.toggle(false, 'navi')
  //   console.log("ruch")
  // }


}
