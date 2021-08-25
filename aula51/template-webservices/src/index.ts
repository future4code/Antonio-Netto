import app from "./app";
import createUser from "./endpoints/createUser";
import { getAdressInfo } from "./Services/getAdressInfo";
import createTableAula51 from "./endpoints/createTableAula51";
import addAdressAula51 from "./endpoints/addAdressAula51";


app.post("/users/signup", createUser);

getAdressInfo("80530230").then(console.log);

app.post("/aula51", createTableAula51); 

app.put("/aula51", addAdressAula51); 
   
