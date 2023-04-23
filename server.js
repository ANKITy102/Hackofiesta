import express from 'express'

const app = express();
const port = 3000;

// middlewares
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// app.use(express.json({ extended: false }));

// route included
app.use("/payment", './routes/payment.js');

app.listen(port, () => console.log(`server ankit started on port ${port}`));