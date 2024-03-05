import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private router: Router) {}
  id: string = '';
  ngOnInit(): void {
    // this.id = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe((value: any) => {
      this.id = value['id'];
    });
  }

  thirdA() {
    this.router.navigate(['a'], { relativeTo: this.activeRoute });
  }
}
