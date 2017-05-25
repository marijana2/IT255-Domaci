import { Dz9marijanaPage } from './app.po';

describe('dz9marijana App', () => {
  let page: Dz9marijanaPage;

  beforeEach(() => {
    page = new Dz9marijanaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
