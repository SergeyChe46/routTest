import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdAComponent } from './components/third-a/third-a.component';
import { ThirdBComponent } from './components/third-b/third-b.component';
import { ThirdComponent } from './components/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondComponent,
    ThirdComponent,
    ThirdAComponent,
    ThirdBComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
