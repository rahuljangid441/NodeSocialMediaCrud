import express from 'express';
import  { getTweets , getTweetsById , createTweet } from '../../controllers/tweetController.js';
const router = express.Router();

router.get('/' , getTweets);

router.get('/:id' , getTweetsById);

router.post('/' , createTweet);


export default router;