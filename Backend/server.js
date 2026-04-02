// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const contactRoutes = require("./routes/contactRoutes")
// const projectRoutes = require("./routes/projectRoutes")
// const skillRoutes = require("./routes/skillRoutes")

// const app = express();

// // connect database
// connectDB();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Portfolio Backend Running");
// });
// app.use("/api",contactRoutes)
// app.use("/api",projectRoutes)
// app.use("/api",skillRoutes)

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });













// require("dotenv").config()

// const express = require("express")
// const cors = require("cors")
// const connectDB = require("./config/db")

// const contactRoutes = require("./routes/contactRoutes")
// const projectRoutes = require("./routes/projectRoutes")
// const skillRoutes = require("./routes/skillRoutes")

// const app = express()

// connectDB()

// app.use(cors())
// app.use(express.json())

// app.get("/",(req,res)=>{
// res.send("Portfolio Backend Running")
// })

// app.use("/api",contactRoutes)
// app.use("/api",projectRoutes)
// app.use("/api",skillRoutes)

// const PORT = process.env.PORT || 5000

// app.listen(PORT,()=>{
// console.log(`Server running on port ${PORT}`)
// })









require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");

const app = express();

// Database connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

// Routes
app.use("/api", contactRoutes);
app.use("/api", projectRoutes);
app.use("/api", skillRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


