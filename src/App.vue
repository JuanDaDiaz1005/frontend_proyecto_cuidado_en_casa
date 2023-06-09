<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <nav class="nav-links">
        <div id="links-principales">
          <div class="links2">
            <RouterLink to="/"><img class="logo-inicio" src="../src/assets/media/LogoSW2.png" alt=""></RouterLink>
            <RouterLink class = "link" to="/consultar_paciente">Consultar paciente</RouterLink>
            <RouterLink class = "link" to="/registrar_diagnostico">Diagnóstico</RouterLink>
            <RouterLink class = "link" to="/registrar_sugerencia_cuidado">Sugerencia de cuidado</RouterLink>
          </div>
          <div>
            <RouterLink class = "link" to="/ingresar">Ingresar</RouterLink>  
          </div>
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
}

.nav-links{

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: var(--color-soft-blue);
  font-size: 15pt;
  color: black;
  font-weight: 600;
  font-family: var(--fuente-principal);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}

.logo-inicio{
  margin: 0;
  width: 60px;
  height: 60px;
  padding: 0PX 30px 0 15PX;
}

 #links-principales{
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 0 250px;
  justify-content: space-around;
 }

 .link{
  padding-right: 10px;
  text-decoration: none;
  color:black;
 }

 .links2{
  display: flex;
  align-items: center;
  width: 100%;
 }

</style>
