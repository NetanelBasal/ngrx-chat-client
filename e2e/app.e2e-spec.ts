import { ChatAppPage } from './app.po';

describe('chat-app App', () => {
  let page: ChatAppPage;

  beforeEach(() => {
    page = new ChatAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
