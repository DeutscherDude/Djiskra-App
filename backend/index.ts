import * as dotenv from 'dotenv';
import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import connectDb from './config/db';
import { userRouter } from './routes/userRoutes';
import { projectRouter } from './routes/projectRoutes';
import errorHandler from './middleware/errorMiddleware';

dotenv.config();
connectDb();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);

app.use(errorHandler);

app.listen(port, () => { console.log(`Server is running on port: ${port}`) });


export default app;
