/*
const app_name = 'my-project';

export default {
  name: naapp_nameme,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
  // All values in extra will be passed to your app.
  extra: {
    fact: 'this is a extra value',
  },
};
*/
export default ({ config }) => {
  console.log(config.name); // prints 'My App'
  return {
    ...config,
  };
};