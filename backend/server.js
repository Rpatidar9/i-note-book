const express = require('express')
const connectDB = require('./config/db')
const userRouter = require('./MVC/user/route')
const authRouter = require('./MVC/auth/route')
const noteRouter = require('./MVC/note/route')
const app = express();
app.use(express.json());
connectDB()
// const rateLimit = {}
// const LIMIT = 3; // Max requests per minute
// const TIME_FRAME = 60 * 1000; // 1 minute
// app.use((req, res, next) => {
//     const ip = req.ip;
//     const now = Date.now();

//     if (!rateLimit[ip]) {
//         rateLimit[ip] = { count: 1, startTime: now };
//     } else {
//         if (now - rateLimit[ip].startTime < TIME_FRAME) {
//             rateLimit[ip].count++;
//         } else {
//             rateLimit[ip] = { count: 1, startTime: now };
//         }
//     }

//     if (rateLimit[ip].count > LIMIT) {
//         return res.status(429).json({ message: "Too many requests, please try again later." });
//     }

//     next();
// })

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/note', noteRouter);
app.get('/api', (req, res) => {
    res.send('well come');
})
app.listen(6200, () => {
    console.log(`server is listen at 6200 port`);
})