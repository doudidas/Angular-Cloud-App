import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ma superbe application !';
  private birthdate: any;
  public age: number;
  constructor() {
      this.birthdate = new Date(1993, 12, 2);
      var timeDiff = Math.abs(Date.now() - this.birthdate);
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }

 ngOnInit() { }

}
