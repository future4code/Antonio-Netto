import { Request, Response } from "express";
import { connection } from "../data/connection";


export default async function addAdressAula51(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
 
       const { cep, logradouro, complemento, bairro, localidade, uf } = req.body
 
       if (!cep || !logradouro || !complemento || !bairro || !localidade || !uf) {
          res.statusCode = 422
          throw "todos os campos são obrigatórios"
       }
 
       
 
       const newAdress = { cep: Number, logradouro: String, complemento: Number, bairro: String, localidade: String, uf: String }
 
       await connection('Aula51').insert(newAdress)
 
       res.status(201).send("Usuário criado com sucesso!")
 
    } catch (error) {
 
       if (typeof error === "string") {
 
          res.send(error)
       } else {
          
          console.log(error.sqlMessage || error.message);
          res.status(500).send("Ops! Um erro inesperado ocorreu =/")
       }
 
    }
 }