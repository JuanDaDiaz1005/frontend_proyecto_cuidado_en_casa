<script>
    import { onMounted } from 'vue';
    import { RouterLink, RouterView } from 'vue-router'
    export default {
        methods: {
            async sendData() {
                try {
                    const response = await axios.post('http://localhost:8000/ruta-de-tu-api', {
                    // Aquí puedes pasar los datos que deseas enviar a FastAPI
                    });
                    // La respuesta de FastAPI estará disponible en response.data
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        },
        data() {
            return { 
                paciente: {
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
            }
        }
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