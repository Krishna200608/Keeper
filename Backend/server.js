import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//--------------------------------------------------------------------------------------------------------------------------------------------------------

const app = express();

app.use(cors);
app.use(bodyParser.urlencoded({extended : true}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Server is running on PORT : " + PORT);
})