import express { Express, Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type conta = {
  name: string;
  cpf: number;
  idade: number; //Achei que fica mais fácil colocar idade agora do que data de nascimento.
  saldo: number;
  transacoes: transacoes
};

type transacoes = [
    valor: number,
    data: Date, 
    descricao: string,
];

const usuarios: conta[] = [
  {
    name: "Joao",
    cpf: 1515665156165,
    idade: 50, 
    saldo: 5000,
    transacoes: [500, new Date(1995, 11, 25), "Pagamento do médico"],

  },
  {
    name: "Antonio",
    cpf: 152256667536165,
    idade: 31, 
    saldo: 1000000,
    transacoes: [500, new Date(1995, 11, 25), "Pagamento do médico"]
  },
  {
    name: "Luiza",
    cpf: 134354565465465,
    idade: 19, 
    saldo: 1500,
    transacoes: [500, new Date(1995, 11, 25), "Pagamento do médico"]
  },
  {
    name: "Carol",
    cpf: 54357677843211,
    idade: 25, 
    saldo: 6000,
    transacoes: [500, new Date(1995, 11, 25), "Pagamento do médico"]
  },
  {
    name: "Carlos",
    cpf: 1654654654654,
    idade: 27,
    saldo: 120000,
    transacoes: [500, new Date(1995, 11, 25), "Pagamento do médico"]
  },
];

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { name, cpf, idade, saldo, transacoes } = req.body;

    if (!name || !cpf || !idade || !saldo || !transacoes) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: conta = {
      name,
      cpf,
      idade,
      saldo,
      transacoes,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
