import { Lesson16Page } from './app.po';

describe('lesson16 App', () => {
  let page: Lesson16Page;

  beforeEach(() => {
    page = new Lesson16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
