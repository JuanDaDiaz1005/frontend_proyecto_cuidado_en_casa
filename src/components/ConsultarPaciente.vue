<script>
    import { onMounted } from 'vue';
    import { RouterLink, RouterView } from 'vue-router'
    onMounted(() => {
        
    });
    export default {
        methods: {
            async sendData() {
                try {
                    const response = await axios.get('http://localhost:8000/ruta-de-tu-api', {
                        cedula: "123456789"
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
        <div class="container_consulta">
            <form action="#" class="formulario">
                <div class="tipo_doc">
                    <label for="select_tipo_doc">Tipo de documento:</label>
                    <select name="select_tipo_doc" id="select_tipo_doc" class="input_doc">
                        <option value="#">Seleccione una opción</option>
                        <option value="cedula">Cédula</option>
                        <option value="tarjeta">Tarjeta de identidad</option>
                        <option value="pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div class="tipo_doc">
                    <label for="num_id">Número de identificación:</label>
                    <input type="text" name="numero_identificacion" id="num_id" class="input_doc">
                </div>
            </form>
            <button><RouterLink :to="{ name: 'info_paciente', params: { nombre: paciente.nombre } }" class="btn_consultar">Consultar</RouterLink></button>
        </div>
    </main>
</template>

<style scoped>

    main{
        width: 100%;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .container_consulta{
        background-color: var(--color-gray-100);
        margin: 40px 40px;
        padding: 3em;
        border-radius: 10px;
        width: 40%;
        height: 60%;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .formulario{
        margin: 60px 0px;
        width: 65%;
    }

    label{
        margin-bottom: 10px;
        font-family: var(--fuente-principal);
        font-size: 16pt;
    }

    .tipo_doc{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .input_doc{
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        margin-bottom: 20px;
        border-radius: 7px;
        border: 1px solid var(--color-gray-300);
        padding: 0px 10px;
        font-family: var(--fuente-principal);
        font-size: 14pt;
    }

    #select_tipo_doc:hover{
        cursor: pointer;
    }

    .btn_consultar{
        width: 100%;
        height: 45px;
        border-radius: 7px;
        border: none;
        color: black;
        background-color: var(--color-primary);
        font-family: var(--fuente-principal);
        font-size: 14pt;
        font-weight: bold;
        transition: all 0.3s ease;
        text-decoration: none;
    }
</style>