import express from 'express'
import cors from 'cors'
import { connetDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/UserRoute.js';
import 'dotenv/config'
import cartRouter from './routes/CartRoute.js';
import orderRouter from './routes/OrderRoute.js';


// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connetDB();

//api endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.listen(port, () => {
    console.log(`servering running on port ${port}`)
})

