import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChatMessage } from '../chat-message.model';

@Component({
  selector: 'app-chat-messages',
  template: `
    <section class="messages">
      <ng-container *ngFor="let message of messages; odd as isOdd; trackBy: trackByFn">
        <app-chat-message [message]="message" [isOdd]="isOdd"></app-chat-message>
      </ng-container>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './chat-messages.component.css' ]
})
export class ChatMessagesComponent {
  @Input() messages : ChatMessage[] = [];

  trackByFn( index ) {
    return index;
  }

}
