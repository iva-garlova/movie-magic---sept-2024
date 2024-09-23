import { Router } from "express";
import homeController from './controllers/homeController.js';

const router = Router();

app.use(homeController);

export default router;