// ./config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
        logger: console, // Only if you want to `stdout` logs
      },
    },
  },
});
