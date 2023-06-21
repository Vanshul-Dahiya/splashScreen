import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor() { }
  ngOnInit(): void {
    const menu = document.querySelector<HTMLDivElement>('#menuicon');
    const navbar = document.querySelector<HTMLDivElement>('.navbar');
    if (menu && navbar) {
      menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
  }
  }
} 

}
