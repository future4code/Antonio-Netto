import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

//EXERCÍCIO 1
//a) GET
//b) A entidade nesse caso é "users".

//app.get("/users", (req: Request, res: Response) => {
  //res.send(users)
//})

//EXERCÍCIO 2
//a)

/*

app.get("/users", (req: Request, res: Response) => {
  res.send(users)
})*/

//EXERCÍCIO 3
//a) Nesse caso, deve ser usado o QueryParams.




app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//Exercicio 4
//a) Não faz nenhuma diferença em termos de execução do código mudar o método, ele existe apenas para 
//a organização e a semântica do código.
//b) Ele não é adequado porque aqui não estamos modificando algo que já existe, estamos criando um usuário novo.
//Se estivéssemos modificando algum usuário existente, o método PUT seria o método apropriado.

app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {id , name, email, type, age} = req.body

    if(!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Por favor, verifique as informações passadas.")
    }

    const newUser: User = {
        id,
        name,
        email,  
        type,
        age
    }

    users.push(newUser)

    res.status(201).send({ message: "Usuário criado com sucesso" })

  } catch(error) {
    res.status(errorCode).send({message: error.message})
  }
})