const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:3418/';

describe('ensure testing config', () => {
  test('jest config', () => {
    const message = 'test run';
    expect(message).toEqual('test run');
  });
});
