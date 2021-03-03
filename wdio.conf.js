exports.config = {
  runner: 'local',
  specs: ['./specs/*.js'],
  maxInstances: 2,
  capabilities: [
    {
      maxInstances: 5,

      browserName: 'chrome',
      acceptInsecureCerts: true
    }
  ],
  logLevel: 'info',
  baseUrl: 'https://www.notino.ua/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
