module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4d8da7738f0264a723457a006c1487f6'),
  },
});
