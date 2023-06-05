import { Selector } from 'testcafe';
import { uploadScreenshot } from './uploadScreenshot.js';
fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
    await t.takeScreenshot("c")
    await uploadScreenshot("c");
    await t.expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

