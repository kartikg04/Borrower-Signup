const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error", err));

app.use(
  cors({
    origin: "https://borrower-signup-frontend.netlify.app", // your frontend domain
  })
);

app.use("/api/borrowers", require("./routes/borrowerRoutes"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
