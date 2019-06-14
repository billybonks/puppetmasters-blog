/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  var ENV = {
    pipeline: {
      // This setting runs the ember-cli-deploy activation hooks on every deploy
      // which is necessary in order to run ember-cli-deploy-cloudfront.
      // To disable CloudFront invalidation, remove this setting or change it to `false`.
      // To disable ember-cli-deploy-cloudfront for only a particular environment, add
      // `ENV.pipeline.activateOnDeploy = false` to an environment conditional below.
      activateOnDeploy: true
    },
  };

  ENV.s3 = {};
  ENV["s3-index"] = {
    allowOverwrite: true
  };

  ENV.s3.accessKeyId = process.env.AWS_KEY;
  ENV.s3.secretAccessKey = process.env.AWS_SECRET;
  ENV.s3.bucket = 'www.billybonks.dev';
  ENV.s3.region = 'us-east-1';

  ENV["s3-index"].accessKeyId = process.env.AWS_KEY;
  ENV["s3-index"].secretAccessKey = process.env.AWS_SECRET;
  ENV["s3-index"].bucket = 'www.billybonks.dev';
  ENV["s3-index"].region = 'us-east-1';

  ENV.cloudfront = {
    distribution: 'E2TNEKEJUY08HP'
  }
  return ENV;
};
