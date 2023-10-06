import { Router } from 'express';
import { authUser, createUser, getDetails } from '../controllers/users.controller.js';

const route = Router();

route.post("/auth", authUser)

route.post("/create-user", createUser)

route.get("/get-details", getDetails)

export default route;

