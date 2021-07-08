import {useState} from 'react'
import axios from 'axios';

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

  return (
    <div>
        <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />

        <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Enviar</button>
    </div>
  );  
  };

  export default LoginPage;

