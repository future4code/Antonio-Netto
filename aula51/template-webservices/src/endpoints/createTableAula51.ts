import { Request, Response } from "express";
import { connection } from "../data/connection";


export default async function createTableAula51(
    req: Request,
    res: Response
 ): Promise<void> {
      try {
      await connection.raw(`
      CREATE TABLE Aula51(
         cep INT NOT NULL
         rua VARCHAR(255) NOT NULL
         complemento VARCHAR(255) NOT NULL
         bairro VARCHAR(255) NOT NULL
         cidade VARCHAR(255) NOT NULL
         estado VARCHAR(255) NOT NULL
      );
      `)
      res.status(201).send("Success!")
      } catch (error) {
      console.log(error.message);
      res.status(500).send("An unexpected error occurred")
      }
      }