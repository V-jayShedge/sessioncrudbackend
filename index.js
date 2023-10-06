import express from 'express';
import session from 'express-session';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors({
  exposedHeaders: true,
  origin: "http://localhost:4200",
  credentials: true
}))
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "anyrandomstring",
    cookie: {
      secure: false,
      maxAge: 60000
    }
  })
);

//route imports
import userRoute from './routes/users.route.js';



app.use('/', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
