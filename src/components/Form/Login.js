import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'

class Login extends Component {
    render() {
        return (
            <section className="container w-100 p-3">
                <div class="text-center my-5" style={{fontFamily:"Montserrat"}}>
                    <h1>Entre com a sua conta</h1>
                </div>
                <Input tipo="text" placeholder="E-mail"/>
                <Input tipo="password" placeholder="Senha"/>
                    <a href="#"><p class="my-2 ml-3">Esqueci minha senha</p></a>
                <Button tipo="button" value="Entrar" nome="Entrar"/>
            </section>
        )
    }
}

export default Login