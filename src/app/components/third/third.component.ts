import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  id: string = '';
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    // this.router.params.subscribe((value: any) => {
    //   this.id = value;
    // });
  }
}
