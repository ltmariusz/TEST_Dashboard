import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  // tu skonczyles  https://akveo.github.io/nebular/docs/components/layout/overview#nblayoutheadercomponent
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
