import { Component, EventEmitter, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen!:boolean;
  @Output() menuToggler=new EventEmitter<any>;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  menuToggle(){
  this.isMenuOpen=!this.isMenuOpen
  this.menuToggler.emit(this.isMenuOpen)
  }

}
