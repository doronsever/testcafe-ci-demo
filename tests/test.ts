import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://localhost:4200`;

test('My first test', async t => {
  const articleHeader = await Selector('h2');

  // Obtain the text of the article header
  const headerText = await articleHeader.innerText;
  await t.expect(headerText).eql('Resources');
});
