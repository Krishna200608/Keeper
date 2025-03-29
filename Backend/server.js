import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongdbconfig.js';
import notesRouter from './Routes/noteRoutes.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();

//const allowedOrigins = ['http://localhost:5173/Keeper'];

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.use('/api', notesRouter)

app.get('/', (req,res)=>{
    res.send("API is working");
})

app.listen(port, ()=>{
    console.log("Server is running on port :", port);
})
