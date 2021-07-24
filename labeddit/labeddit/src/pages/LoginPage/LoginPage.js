import React from "react"
import { ScreenContainer, SignUpButtonContainer, InputContainer } from "./styled"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { goToFeed, goToSignUp } from "../../routes/coordinator"
import { TextField } from "@material-ui/core"
import useForm from '../../hooks/useForm'
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import useUnProtectedPage from "../../hooks/useUnprotectedPage"


const LoginPage = () => {
    useUnProtectedPage()

    const [form, onChange, clear] = useForm({email:"", password: ""})

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

   

    

    const login = () => {
        axios.post(`${BASE_URL}/users/login`, form, history)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => alert("Erro"))
    }

    return (
        <ScreenContainer>
        
            <h1>Login</h1>

        <InputContainer>
        
        <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email} 
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"} 
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
            
            <Button
            fullWidth
            variant={"contained"}
            color={"primary"}
            type={"submit"}
            >
            Fazer Login!
            </Button>

            </form>
        
        </InputContainer>

        <SignUpButtonContainer>
        
        <Button
            onClick={() => goToSignUp(history)}
            fullWidth
            variant={"text"}
            color={"primary"}
            type={"submit"}
            >
            Não possui conta? Cadastre-se
            </Button>

        </SignUpButtonContainer>


        </ScreenContainer>

    )
}

export default LoginPage