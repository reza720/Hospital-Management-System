const express = require("express");
const app = express();
const router = require("./routers");
const database = require("./config/database");
const globalErrorHandler=require("../src/middlewares/globalErrorHandler");

app.use(express.json());
app.use("/api", router);
app.use((req,res)=>{
    res.status(404).json({message:"route not found"});
});
app.use(globalErrorHandler);

(async () => {
    try {
        await database.authenticate();
        await database.sync();
        console.log("Database connected");

        app.listen(3000, () => {
            console.log("App running on port 3000");
        });
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
})();
