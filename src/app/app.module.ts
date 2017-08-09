import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { store } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ChatEffects } from './chat/effects/chat.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    ReactiveFormsModule,
    StoreModule.forRoot(store),
    EffectsModule.forRoot([ ChatEffects ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
