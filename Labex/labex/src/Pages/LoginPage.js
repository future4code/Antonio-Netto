import {useState} from 'react'
import axios from 'axios';
import{useForm} from "./Hooks/useForm"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password)
    const body = {
      email: email,
      password: password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/antonio-machado-molina/login', body)
    .then((res) => {
        console.log('Deu certo', res.data)
    }).catch ((err) => {
        console.log('Deu errado', err.response)
    })
  } 

  const { form, onChange, cleanFields } = useForm({email: "", password: "", })

  const fazerLogin = (event) => {
    event.preventDefault()
    console.log("Formulário enviado", form);
    cleanFields();
  };

  return (
    <div>
        <form onSubmit={fazerLogin}>
        <input
        name={email}
        placeholder="email"
        type="email"
        value={form.email}
        onChange={onChange}
        required
      />

        <input
        name={password}
        placeholder="password"
        type="password"
        value={form.password}
        onChange={onChange}
        required
      />
      <button onClick={onSubmitLogin}>Enviar</button>
      </form>
    </div>
  );  
  };

  export default LoginPage;

