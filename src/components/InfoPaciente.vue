<script >
    export default {
        data() {
            return {
                paciente: paciente
            }
        },
    }
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
        <h1 class="nombrePaciente">{{ paciente.nombre }} {{ paciente.apellido }}</h1>
        <div class="contenedor">
            <div class="infoBasica">
                <p>Información Básica</p>
                <div class="datos">
                    <div class="dato">Cedula: {{ paciente.cedula }}</div>
                    <div class="dato">Edad: {{ paciente.edad }}</div>
                    <div class="dato">Dirección: {{ paciente.direccion }}</div>
                </div>
            </div>
            <div class="infoContacto">
                <p>Información de contacto</p>
                <div class="datos">
                    <div class="dato">Teléfono: {{ paciente.telefono }}</div>
                    <div class="dato">Email: {{ paciente.email }}</div>
                </div>
            </div>
            <div class="enlace">
                <RouterLink to="/consultar_signos_vitales"><img src="../assets/media/tiempo.png" alt="" class="historialSignosVitales"></RouterLink>
            </div>
        </div>
    </main>
</template>

<style >
    main{
        width: 100%;
    }
    p{
        font-size: 17pt;
        margin-top:10px;
        margin-bottom: 15px;
    }

    .datos{
        margin-left: 10px;
        font-size: 14pt;
    }

    .dato{
        margin: 2px 0px;
    }

    .historialSignosVitales{
        width: 40px;
    }

    .enlace{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: end;
    }
</style>