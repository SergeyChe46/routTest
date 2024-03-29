import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdAComponent } from './components/third-a/third-a.component';
import { ThirdBComponent } from './components/third-b/third-b.component';
import { ThirdComponent } from './components/third/third.component';
import { dataResolver } from './helpers/data.resolver';

const thirdRouteChildren: Routes = [
  { path: 'a', component: ThirdAComponent },
  { path: 'b', component: ThirdBComponent },
];
const routes: Routes = [
  { path: 'main', component: MainComponent },
  {
    path: 'second',
    component: SecondComponent,
    resolve: { greetings: dataResolver },
  },
  {
    path: 'third/:id',
    component: ThirdComponent,
    children: thirdRouteChildren,
  },
  {
    path: 'fourth',
    loadChildren: () =>
      import('../app/lazy/lazy.module').then((m) => m.LazyModule),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
