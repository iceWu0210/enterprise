import { EnterprisePage } from './app.po';

describe('enterprise App', () => {
  let page: EnterprisePage;

  beforeEach(() => {
    page = new EnterprisePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
