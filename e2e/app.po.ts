import { browser, element, by } from 'protractor';

export class PbClientDashboardAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getContainer() {
    return element(by.css('.container'));
  }
}
