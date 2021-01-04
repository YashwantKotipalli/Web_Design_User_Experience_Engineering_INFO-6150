// importing express and cotnrollers from the controller 

import express from 'express';
import stickyController from './../controllers/sticky.controller';

const router = express.Router();

/**
 * Search - GET /stickies
 * Create - POST /stickies
*/
router.route('/stickies')
    .get(stickyController.index)
    .post(stickyController.create);

/**
 * Retrieve - GET /stickies/${id}
 * Update - GET /stickies/${id}
 * Delete - DELETE /stickies/${id}
*/
router.route('/stickies/:id')
    .get(stickyController.get)
    .put(stickyController.update)
    .delete(stickyController.remove);


// exporting the router file
export default router;