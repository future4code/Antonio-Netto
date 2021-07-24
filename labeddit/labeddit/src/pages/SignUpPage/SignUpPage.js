import React from "react"
import { ScreenContainer, InputContainer } from "./styled"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { TextField } from "@material-ui/core"
import useForm from '../../hooks/useForm'
import useUnProtectedPage from "../../hooks/useUnprotectedPage"

const SignUpPage  = () => {
    
    useUnProtectedPage()

    const [form, onChange, clear] = useForm({email:"", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
       
        
    }

    const history = useHistory()

    return (
        <ScreenContainer>
        
            <h1>Cadastro</h1>

        <InputContainer>
        
        <form onSubmit={onSubmitForm}>

             <TextField
                    name={"username"}
                    value={form.username} 
                    onChange={onChange}
                    label={"Nome do usuário"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    autoFocus
                   
                />

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
            Cadastrar
            </Button>

            </form>
        
        </InputContainer>

     


        </ScreenContainer>

    )
}

export default SignUpPage