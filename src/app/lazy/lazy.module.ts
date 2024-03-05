import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthComponent } from './fourth/fourth.component';

const routes: Routes = [{ path: '', component: FourthComponent }];

@NgModule({
  declarations: [FourthComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
