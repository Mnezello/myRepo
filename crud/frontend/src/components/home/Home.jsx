import React from 'react'
import Main from '../template/Main'
import logo2 from '../../assets/images/logo192.png'
import logo3 from '../../assets/images/json.jpg'

export default props =>
    <Main icon="home" title="Início" subtitle="Projeto React.">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">
            Sistema demonstrando a construção de um cadastro de usuários Front end desenvolvido por <strong>React.js</strong><br/>
            Back end e Banco de dados com base <strong>json</strong> apenas para demonstrar as funcionalidades do projeto. 
        </p>
        <hr />
        <div className="text-center">
            <img src={logo2} alt="react icon"/>
            <img src={logo3} alt="json icon"/>
        </div>
    </Main>