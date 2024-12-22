import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('ng-social-card', el);
  }

  ngDoBootstrap(){
    
  }
}
