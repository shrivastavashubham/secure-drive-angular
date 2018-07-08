import { SdrivePage } from './app.po';

describe('sdrive App', () => {
  let page: SdrivePage;

  beforeEach(() => {
    page = new SdrivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
