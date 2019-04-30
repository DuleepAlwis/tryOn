import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-receptionist-navigation',
  templateUrl: './receptionist-navigation.component.html',
  styleUrls: ['./receptionist-navigation.component.css']
})
export class ReceptionistNavigationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
