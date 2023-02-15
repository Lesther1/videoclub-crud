const express = require('express');
const mongoose = require("mongoose");


const app = express();
const PORT = 3030

const todoRoutes = require("./routes/todoRoutes");

const connectionOptions =
{
  useUnifiedTopology: true,
  useNewUrlParser: true
};

app.use(express.json());


mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://yochi22:Marcador22@cluster0.jzbl6wm.mongodb.net/videoclub", connectionOptions)
  .then(() => console.log("conexion bien, que crack eres karen"))
  .catch((err) => console.error(err));

app.use("/movies", todoRoutes);

app.listen(PORT, () => {
  console.log("mi puerto funciona y es" + PORT)
});
