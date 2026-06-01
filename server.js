import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";


const port = process.env.PORT || 4000;

await connectDB()
app.listen(port, () => console.log("server is working....3000"));
