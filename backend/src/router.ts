import express from 'express';
import { createUser, getUsers, loginUser } from './modules/userModules';
import { MiddlewareCretedUser, MiddlewareLoginUser, MiddlewareVerifyToken } from './middlewares/middlewaresUser';
import { createdTask, getTasks, deleteTask, updateTask } from './modules/taskModules';
import { MiddlewareCreatedTask } from './middlewares/middlewaresTasks';

const router = express.Router();

//Router User
router.get('/', (_req, res) => res.send({Message:'Server Online'}));
router.post('/cadastro', MiddlewareCretedUser, createUser);
router.post('/login', MiddlewareLoginUser, loginUser);
router.get('/home', getUsers);

//Router Task
router.post('/createdTask', MiddlewareCreatedTask, createdTask);
router.get('/tasks', MiddlewareVerifyToken, getTasks);
router.delete('/deleteTask/:id', deleteTask);
router.put('/updateTask/:id', updateTask);

export default router;