<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
onMounted(() => {
  const registrar = document.getElementById('registrar_desplegable');

  registrar.addEventListener('click', () => {
    const links= document.getElementById('registrar');
    links.classList.toggle('registrar-menu');
})
})

</script>

<template>
  <header>

    <nav class="nav-links">
        <div id="links-principales">
          <RouterLink to="/"><img class="logo-inicio" src="../src/assets/LogoSW2.png" alt=""></RouterLink>
          <RouterLink to="/consultar_paciente">Consultar paciente</RouterLink>
          <div id="registrar_desplegable">
            Registrar
            <ul id="registrar" class="registrar-menu">
              <li><RouterLink to="/registrar_diagnostico">Diagnóstico</RouterLink></li>
              <li><RouterLink to="/registrar_sugerencia_cuidado">Sugerencia de cuidado</RouterLink></li>
            </ul>
          </div>
        </div>
        <div id="link-login">
          <RouterLink to="/ingresar">Ingresar</RouterLink>  
        </div>
    </nav>
  </header>

  <body class="bodyGeneral">
      <RouterView/>
  </body>
  
</template>

<style>

.bodyGeneral {
  padding: 0;
  margin: 0px 250px;
  background-color: var(--color-beige);
}

.nav-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: var(--color-soft-blue);
}

.logo-inicio{
  margin: 0;
  width: 30px;
  height: 30px;
  padding: 0PX 30px 0 15PX;
}

 #links-principales{
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  align-items: center;
  
 }

 #link-login{
  padding-right: 5px;
 }

.registrar-menu {
  list-style: none;
  display:none;
  padding-left: 5px;
 }

 #registrar-desplegable :hover{
  color: white;
 }

</style>
