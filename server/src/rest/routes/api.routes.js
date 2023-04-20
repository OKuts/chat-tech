import {Router} from 'express';
import {ApiController} from '../controllers/api.controller.js';

const router = new Router();
const controller = new ApiController();

router.get('/', (req, res) => {
    controller.sayHello(req, res);
});

export default router;
