import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third/:id', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
