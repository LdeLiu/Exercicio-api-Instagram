import express, { Router } from "express"
import path from "path"
import url from "url"

const imgRouter = Router()

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

imgRouter.get("/profiles", express.static(path.resolve(__dirname, "..", "uploads")))

export {imgRouter}