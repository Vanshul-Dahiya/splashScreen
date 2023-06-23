import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private router : Router){}

  private breakpointObserver = inject(BreakpointObserver);

  // gridData: any[] = [
  //   { name: 'Item 1', description: 'Description 1' },
  //   { name: 'Item 2', description: 'Description 2' },
  //   { name: 'Item 2', description: 'Description 2' },
  //   { name: 'Item 4', description: 'Description 4' },
  // ]
  navigate(itemId: number){
    // this.router.navigate(['/detail'])
      switch (itemId) {
        case 1:
          this.router.navigate(['/detail']);
          break;
        case 2:
          this.router.navigate(['/report']);
          break;
        case 3:
          this.router.navigate(['/pending']);
          break;
        case 4:
          this.router.navigate(['/claimForm']);
          break;
        default:
          // Handle other item IDs
          break;
      }
    
  }

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );



}
