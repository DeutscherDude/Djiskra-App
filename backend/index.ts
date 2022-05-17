import * as dotenv from 'dotenv';
import express, {Express} from 'express';
import cookieParser from 'cookie-parser';
import connectDb from './config/db';
import usersRouter from './routes/userRoutes';
import projectsRouter from './routes/projectRoutes';
import { errorHandler } from './middleware/errorMiddleware';

dotenv.config();
connectDb();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);

app.use(errorHandler);

app.listen(port, () => { console.log(`Server is running on port: ${port}`) });

module.exports = app;