<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import InfoPaciente from './InfoPaciente.vue'

const cedula = ref('e')
const paciente = ref(null)
onMounted(() => {
    
});

const nombre = 'juan'

function changeCedula(event) {
    cedula.value = event.target.value
}

function consultarPaciente(e) {
    e.preventDefault()
    console.log('------');

    if (cedula.value == '') {
        alert('Todos los campos son obligatorios')
        return
    }
    
    const body = {
        "cedula": cedula.value
    }
    console.log(body);
    fetch('http://127.0.0.1:8000/paciente/get_paciente', {
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
        paciente.value = data
    })
}
</script>

<template> 
    <main v-if="!paciente">
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
                <button @click="consultarPaciente">Consultar</button>
            </form>
            
        </div>
    </main>
    <main v-else>
        <InfoPaciente>
            <div>
            <p >{{ paciente.nombre }}</p>
            <p >{{ paciente.apellido }}</p>
            <p >{{ paciente.edad }}</p>
            <p >{{ paciente.cedula }}</p>
            <p >{{ paciente.telefono }}</p>
            <p >{{ paciente.email }}</p>
            <p >{{ paciente.direccion }}</p>
        </div>
        </InfoPaciente>
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