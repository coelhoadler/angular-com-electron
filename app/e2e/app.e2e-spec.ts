import { PalestraFtdPage } from './app.po';

describe('palestra-ftd App', () => {
  let page: PalestraFtdPage;

  beforeEach(() => {
    page = new PalestraFtdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
