<template>
    <div id="app">
         <div class="alert alert-warning">
            Bem vindo a Calculadora on-line, as operações <strong>"+/-"</strong> e <strong>"%</strong> devem ser sucedidas por <strong>"="</strong> para funcionar corretamente
        </div>
        <h1>Calculadora</h1>
        <Calculator />
        <p>
            Desenvolvido por <br/><i class="fa fa-at text-primary"></i><strong>Mnezello</strong> por meio da<strong> Cod<span class="text-danger">3</span>r</strong>
        </p>
    </div>
</template>

<script>
import Calculator from "./main/Calculator"
export default {
    components: { Calculator }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
    font-family: "RobotoMono", monospace;
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}

p { width: 235px;
    border-radius: 5px; 
    padding: 0px 25px;
    background-color: #fff; 
    color: #000;
}
</style>