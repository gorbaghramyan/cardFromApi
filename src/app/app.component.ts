import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoader = true;
  cards = [];

  getData() {
    fetch('https://60f340396d44f30017788915.mockapi.io/api/v1/tasks')
      .then(response => response.json())
      .then(data => {
        this.cards = data;
        this.showLoader = false;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  ngOnInit(): void {
    this.getData()
  }

}
