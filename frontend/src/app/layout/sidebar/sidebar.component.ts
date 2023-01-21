import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  arrow = document.querySelectorAll(".arrow")
  sidebar = document.querySelector(".sidebar") as HTMLElement
  sidebarBtn = document.querySelector(".bx-menu") as HTMLElement
  // isMenuOpen!:boolean;
  // @Output() menuToggler=new EventEmitter<any>;

  constructor() {

  }

  ngOnInit(): void {
    // console.log(this.sidebarBtn);
    
    for (var i = 0; i < this.arrow.length; i++) {
      this.arrow[i].addEventListener("click", (e: any) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
    if (this.sidebarBtn) {
      this.sidebarBtn.addEventListener("click", () => {
        this.sidebar.classList.toggle("close");
      });
    }
  }
  //  show(){
  //   // this.isMenuOpen=!this.isMenuOpen
  //   // this.menuToggler.emit(this.isMenuOpen)
  //  }
  //  execute(){
  //   console.log('works');
  //  }



}
