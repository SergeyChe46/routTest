import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.pipe(delay(5000)).subscribe((res: any) => {
      this.greetings = res['greetings'];
    });
    console.log(this.route.data);
    this.id = this.random();
  }
  id: any;
  greetings: string = '';

  random() {
    return Math.random() * 10;
  }
}
