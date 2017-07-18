import { MarsRover2.0Page } from './app.po';

describe('mars-rover2.0 App', () => {
  let page: MarsRover2.0Page;

  beforeEach(() => {
    page = new MarsRover2.0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
