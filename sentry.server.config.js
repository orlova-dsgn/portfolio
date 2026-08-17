import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://51f77a081256f6453ac9150e05de5215@o4511927442407424.ingest.us.sentry.io/4511927484416000',
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});
