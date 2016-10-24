import { PbClientDashboardPage } from './app.po';

describe('pb-client-dashboard App', function() {
  let page: PbClientDashboardPage;

  beforeEach(() => {
    page = new PbClientDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
