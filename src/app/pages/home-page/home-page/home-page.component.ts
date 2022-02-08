import { Component, HostListener, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { NbComponentSize, NbSidebarService, NbSidebarState } from '@nebular/theme';
import { UserControlerService } from 'src/app/services/global/user-controller.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

     @HostListener('window:resize', ['$event'])
     onResize(event: any){
     this.setSizeOptions(window.innerWidth)
   }


  /**
   * Zmienne do obsługi responsywności 
   */
  size: NbComponentSize = "large"
  //menuShow: boolean = false
  menuFixed: boolean = false
  menuShow: NbSidebarState = "compacted" 
  userShowTitle: boolean = true


  /*Lewa część panelu*/
  

  constructor(
    private sidebarService: NbSidebarService,
    private userControlerService: UserControlerService) { }

  ngOnInit(): void {
    this.setSizeOptions(window.innerWidth)
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

getUserEmail():string{
  let email = this.userControlerService.getEmail()
  if (email) {
    return email
  }else{
    return "--"
  }
}

  /**
   * Menu przycisk
   */
  //  showMenu() {
  //   console.log(this.menuShow)
  //   this.menuShow = !this.menuShow
  //   this.sidebarService.toggle(false, 'sidebar')
  //   console.log(this.menuShow)
  // }

  showMenu() {
  //  if(this.menuShow == "expanded"){ console.log("ifff"); return this.menuShow="collapsed" }
  //  else {console.log("elseee"); return this.menuShow = "compacted"}
    switch(this.menuShow){
      case "expanded":
        this.menuShow = "compacted"
        break;
      case "collapsed":
        this.menuShow = "expanded"
        break;
      case "compacted":
        this.menuShow = "expanded"
      break;

    }

}




//małe
showMenu1() {
    switch(this.menuShow){
      case "expanded":
        this.menuShow = "compacted"
        console.log(1111)
        break;
      case "compacted":
        console.log(1112)
        this.menuShow = "expanded"
        break;
    }
}


//duże
showMenu2() {
    switch(this.menuShow){
      case "expanded":
        this.menuShow = "collapsed"
        console.log(2221)
        break;
      case "collapsed":
        this.menuShow = "expanded"
        console.log(2222)
      break;

    }

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


 



  setSizeOptions(width: number){
    if(width > 1200){
      this.size= 'giant'
     // console.log(this.textMenu, this.iconMenu)
      this.userShowTitle = true
      this.menuShow = "expanded"
      this.menuFixed = false
      this.showMenu1()
    } 
    else if(width >= 600) {
      this.size = 'large'
      this.userShowTitle = true
      this.menuShow = "expanded"
      this.menuFixed = false
      this.showMenu1()
    }
    else{
      this.size = 'small'
      this.menuShow = "expanded"
      this.userShowTitle = false
      this.menuFixed = true
      this.showMenu2()
      ////////////TU SKONCZYLES DODAJ IFA I ELSA BULEANA KTORY SPRAWDZI CZY WARTOSC SIE ZMIENILA JESLI TAK 
    }
  }

}

//giant > 1200 > large 