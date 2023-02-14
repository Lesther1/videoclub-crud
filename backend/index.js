const express = require('express');
const mongoose = require("mongoose");


const app = express();
const PORT = 3030

const todoRoutes = require("./routes/todoRoutes");

const connectionOptions =
{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
};

app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://karen:contrase%C3%B1a@cluster0.bko6piz.mongodb.net/videoclub")
  .then(() => console.log("conxion bien, que crack eres karen"))
  .catch((err) => console.error(err));

app.use("/movies", todoRoutes);

app.listen(PORT, () => {
  console.log("mi puerto funciona y es" + PORT)
});
