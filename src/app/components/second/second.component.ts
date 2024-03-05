import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent implements OnInit {
  ngOnInit(): void {
    this.id = this.random();
  }
  id: any;

  random() {
    return Math.random() * 10;
  }
}
