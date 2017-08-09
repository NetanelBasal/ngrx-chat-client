import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-message-input',
  template: `
    <div class="bottom_wrapper clearfix">
      <div class="message_input_wrapper">
        <input class="message_input"
               [formControl]="control"
               (keyup.enter)="submit()"
               placeholder="Type your message here..."/>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [ './chat-message-input.component.css' ]
})
export class ChatMessageInputComponent {
  @Output() message = new EventEmitter();

  @Input()
  set success( _ ) {
    this.control.reset();
  }

  control = new FormControl();

  submit() {
    this.message.emit(this.control.value);
  }

}
