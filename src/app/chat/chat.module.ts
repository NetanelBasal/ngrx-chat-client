import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageInputComponent } from './chat-message-input/chat-message-input.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    /*
      This imports should be on a shared module
     */
    CommonModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ ChatService ],
  exports: [ ChatMessageComponent, ChatMessageInputComponent, ChatMessagesComponent ],
  declarations: [ ChatMessageComponent, ChatMessageInputComponent, ChatMessagesComponent ]
})
export class ChatModule {
}
