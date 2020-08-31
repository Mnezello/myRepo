import './Header.css';
import React from 'react';

export default props =>
    <header className="header">
        <div class="alert alert-warning">
            Bem vindo a Calculadora on-line, as operações <strong>"+/-"</strong> e <strong>"%</strong> devem ser sucedidas por <strong>"="</strong> para funcionar corretamente
        </div>
        <div>
            <h1>Calculadora</h1>
        </div>
    </header>