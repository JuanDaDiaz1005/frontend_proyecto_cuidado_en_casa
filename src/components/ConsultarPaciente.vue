<script>
import {ref } from 'vue';
import ConsultarSignosVitales from './ConsultarSignosVitales.vue';
import BASE_URL from '../assets/js/settings.js';

export default {
    components: {
    ConsultarSignosVitales,
},
methods: {
    changeCedula,
    consultarPaciente
},
data() {
    return {
        cedula: cedula,
        paciente: paciente
    }
},
beforeRouteLeave(to, from, next) {
    this.paciente = null;
    this.cedula = 'e';
    next();
  }
}

const cedula = ref('e')
const paciente = ref(null);

function changeCedula(event) {
    cedula.value = event.target.value
}

function consultarPaciente() {
    console.log('------');

    if (cedula.value == '') {
        alert('Todos los campos son obligatorios')
        return
    }
    
    const body = {
        "cedula": cedula.value
    }
    console.log(body);
    fetch(BASE_URL + '/paciente/get_paciente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
        if (data?.nombre == undefined) {
            return
        }
        console.log(data);
        paciente.value = data
        console.log(paciente.value);
    })
}
</script>

<template> 
    <main>
        <div class="container_consulta">
            <form  action="#" class="formulario">
                <div class="tipo_doc">
                    <label for="select_tipo_doc">Tipo de documento:</label>
                    <select name="select_tipo_doc" id="select_tipo_doc" class="input_doc">
                        <option value="#">Seleccione una opción</option>
                        <option value="cc">Cédula</option>
                        <option value="tarjeta">Tarjeta de identidad</option>
                        <option value="pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div class="tipo_doc">
                    <label for="num_id">Número de identificación:</label>
                    <input @change="changeCedula" type="text" name="numero_identificacion" id="num_id" class="input_doc">
                </div>
                <div class="btn">
                    <button @click.prevent="consultarPaciente" class="btn_consultar">Consultar</button>
                </div>
            </form>
        </div>
        <div class="paciente">
            <div v-if="paciente == null" class="carga">
                <img src="..\assets/media/loading-102.gif" alt="Cargando..." class="gifCarga" >
            </div>
            <div class="infoPaciente" v-else>
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
                        <RouterLink :to="{name: 'consultar_signos_vitales', params:{id:paciente.id, nombre: paciente.nombre, apellido: paciente.apellido}}"><img src="../assets/media/tiempo.png" alt="" class="historialSignosVitales"></RouterLink>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped>

    .container_consulta{
        box-sizing: border-box;
        background-color: var(--color-gray-100);
        padding: 3em;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 100%;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .formulario{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20px;
    }

    label{
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: var(--fuente-principal);
        font-size: 14pt;
    }

    .tipo_doc{
        display: flex;
        flex-direction: column;
        width: 40%;
        margin-right: 15px;
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

    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn_consultar{
        margin-top: 15px;
        padding: 0px 10px;
        width: 100%;
        height: 45px;
        border-radius: 5px;
        color: black;
        border:none;
        cursor: pointer;
        background-color: var(--color-success);
        font-family: var(--fuente-principal);
        font-size: 13pt;
        text-decoration: none;
    }

    .btn_consultar:hover{
        box-sizing: border-box;
        background-color: white;
        border: 2px solid var(--color-success);
    }
    .paciente{
        box-sizing: border-box;
        width: 100%;
        padding: 2em;
        display: flex;
        align-items: center;
    }

    .carga{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .infoPaciente{
        padding: 0;
        width: 100%;
    }

    .gifCarga{
        width: 50px;
    }

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