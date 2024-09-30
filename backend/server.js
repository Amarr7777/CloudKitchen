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
const port = process.env.PORT ||4000;

//middleware
app.use(express.json());
const allowedOrigins = [
    'https://cloudkitchen-1.onrender.com',
    'https://cloudkitchen-1-c492.onrender.com'
  ];
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); 
      if (allowedOrigins.includes(origin)) {
        callback(null, true); 
      } else {
        callback(new Error('Not allowed by CORS')); /
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
  }));

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

