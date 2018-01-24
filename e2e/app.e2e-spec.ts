import { CourseregPage } from './app.po';

describe('coursereg App', () => {
  let page: CourseregPage;

  beforeEach(() => {
    page = new CourseregPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
