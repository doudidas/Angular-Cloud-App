import { AngularCVPage } from './app.po';

describe('angular-cv App', () => {
  let page: AngularCVPage;

  beforeEach(() => {
    page = new AngularCVPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
