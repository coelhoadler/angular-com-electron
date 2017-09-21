import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    document.dispatchEvent( new Event('renderiza'));
  }

  constructor() {
  }

}
