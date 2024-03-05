import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    this.id = this.random();
  }

  id: any;
  random() {
    let value = Math.random() * 10;
    return value;
  }
}
