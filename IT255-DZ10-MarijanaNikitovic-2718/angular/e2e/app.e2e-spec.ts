import { Dz10Page } from './app.po';

describe('dz10 App', () => {
  let page: Dz10Page;

  beforeEach(() => {
    page = new Dz10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
