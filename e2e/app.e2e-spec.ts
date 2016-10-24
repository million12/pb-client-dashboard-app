import { PbClientDashboardAppPage } from './app.po';

describe('pb-client-dashboard-app App', function() {
  let page: PbClientDashboardAppPage;

  beforeEach(() => {
    page = new PbClientDashboardAppPage();
  });

  it('should have ".container" element', () => {
    page.navigateTo();
    expect(page.getContainer()).toBeTruthy;
  });
});
