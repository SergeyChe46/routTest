import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FourthComponent } from './lazy/fourth/fourth.component';

@NgModule({
  declarations: [FourthComponent],
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
