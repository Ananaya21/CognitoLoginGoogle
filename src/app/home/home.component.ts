import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToDashboardG(): void {
    window.location.assign(environment.loginURL);
  }

   navigateToDashboardM(): void {
    window.location.assign(environment.loginURL);
  }

}
