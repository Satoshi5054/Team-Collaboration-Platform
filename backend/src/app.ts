import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

// Create the Express application instance
const app = express()

app.use(helmet())                                    
app.use(cors({ origin:"http://localhost:3000" }))  
app.use(express.json())
app.use(morgan("dev"))

// Health-check endpoint to verify that the API is responding
app.get("/health", (_req,res) =>{
    res.json({ status: "ok", message: "API  is running" })
})

export default app