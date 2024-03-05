import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}
  id: string = '';
  ngOnInit(): void {
    this.activeRoute.params.subscribe((value: any) => {
      this.id = value['id'];
    });
  }
}
