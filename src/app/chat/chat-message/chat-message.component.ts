import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChatMessage } from '../chat-message.model';

@Component({
  selector: 'app-chat-message',
  template: `
    <div class="message appeared" [ngClass]="{left: isOdd, right: !isOdd }">
      <div class="avatar">{{message.userName}}</div>
      <div class="text_wrapper">
        <div class="text">{{message.message}}</div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './chat-message.component.css' ]
})
export class ChatMessageComponent {
  @Input() message : ChatMessage;
  @Input() isOdd : boolean;
}
