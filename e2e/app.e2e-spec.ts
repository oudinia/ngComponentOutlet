import { AngularDynamicComponentsPage } from './app.po';

describe('angular-dynamic-components App', () => {
  let page: AngularDynamicComponentsPage;

  beforeEach(() => {
    page = new AngularDynamicComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
