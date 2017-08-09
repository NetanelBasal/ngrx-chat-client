import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ChatEffects } from "../effects/chat.effects";
import { ChatService } from "../services/chat.service";
import { Observable } from "rxjs/Observable";

describe('ChatEffects', () => {
  let runner, chatEffects, chatService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      ChatEffects,
      {
        provide: ChatService,
        useValue: jasmine.createSpyObj('chatService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    chatEffects = TestBed.get(ChatEffects);
    chatService = TestBed.get(ChatService);
  });

  describe('chat$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});