import { Component } from '@angular/core';
import { NavbarComponent } from '../../utilities/navbar/navbar.component';
import { FooterComponent } from '../../utilities/footer/footer.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  constructor(private router:Router,private activatedRouter:ActivatedRoute){
    
  }
  ngOnInit(){
    this.router.navigate(["profile"],{relativeTo:this.activatedRouter})
  }
}
