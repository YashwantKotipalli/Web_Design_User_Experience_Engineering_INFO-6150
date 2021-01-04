// index file, taking input from the stickyroutes.js
// following the file structure, better for the code being used after being transpiled

import StickyRouter from './sticky.route';

export default (app) => {
  app.use('/', StickyRouter);
};