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
        <!-- <RouterLink to="/consultar_paciente/paciente.nombre">Consultar paciente</RouterLink> -->
        <RouterLink :to="{ name: 'info_paciente', params: { nombre: paciente.nombre } }">Consultar</RouterLink>
    </main>
</template>

<style scoped> 
    main{
        margin: 0px 250px;
        background-color: var(--color-beige);
    }
</style>