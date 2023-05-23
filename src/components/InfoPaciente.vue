<script setup> 
    import { RouterLink, RouterView } from 'vue-router'
    const paciente = {
        "id": 3,
        "nombre": "Paciente",
        "apellido": "ApellidoPaciente",
        "edad": 30,
        "cedula": "123456789",
        "telefono": "1234567890",
        "email": "paciente@correo.com",
        "psswd": "contrasena",
        "direccion": "calle 32 # 40-50, Linares"
    }
    </script>

<template> 
    <main>
        <p>Página de info paciente</p>
        <slot></slot>
        <!-- <RouterLink to="/consultar_paciente/paciente.nombre/consultar_signos_vitales">Historial de signos vitales</RouterLink> -->
        <RouterLink :to="{ name: 'consultar_signos_vitales', params: { nombre: paciente.nombre } }">Ver detalles del usuario</RouterLink>
    </main>
</template>

<style scoped> 
    main{
        margin: 0px 250px;
        background-color: var(--color-beige);
    }
</style>