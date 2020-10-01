import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit, OnDestroy {


  constructor( private router: Router, ) {
  }

  ngOnInit() {
    
  }
  ngOnDestroy(): void {
   

  }


  logout() {
   // localStorage.clear();
    this.router.navigate(["/login"]);
  }
  
  
}
