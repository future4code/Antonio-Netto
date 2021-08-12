import express, { Express, Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"

//nao consegui fazer os últimos 2 e não entendi o gabarito

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries/:id", (req, res) => {
    const result = countries.find(
        (country) => {return country.id === Number (req.params.id)}
    )
    res.send(result)
})

app.get("/countries", (req: Request, res: Response) => {
    res.send(countries)
})



app.listen(3003, () => {
    console.log("Servidor pronto!")
})