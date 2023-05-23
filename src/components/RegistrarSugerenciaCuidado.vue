<script setup>
import { onMounted, ref } from 'vue';

const profesionales = ref([])
const pacientes = ref([])

onMounted(() => {
    // los pacientes y profesionales se obtienen de la API
    fetch('http://127.0.0.1:8000/paciente/get_pacientes')
    .then(data => data.json())
    .then(data => {
        pacientes.value = data
    })
    setTimeout(() => {
        profesionales.value = [
            { id: 1, nombre: "Berni", apellido: "Clavijo", cedula: "10056782", edad: "30", telefono: "123456783", email: "ber@correo.com" }
        ]
    }, 2000)
})

const submit = (e) => {
    e.preventDefault();
    const idProfesional = Number(e.target.profesional?.value);
    const idPaciente = Number(e.target.paciente?.value);
    const descripcion = e.target.descripcion?.value;
    const fechaFinal = new Date(e.target.fechaFinal?.value);
    const fechaInicial = new Date(e.target.fechaInicial?.value);
    const cuidado = e.target.cuidado?.value;

    const isCompleteData = idProfesional && idPaciente && descripcion && fechaFinal && fechaInicial && cuidado
    if (!isCompleteData) {
        alert('Todos los campos son obligatorios')
        return
    }

    console.log(typeof fechaFinal);
    // aquí va el envío a la API
    const body = {
        "fecha_inicial": fechaInicial,
        "fecha_final": fechaFinal,
        "profesional_id": idProfesional,
        "paciente_id": idPaciente,
        "cuidado": cuidado,
        "descripcion": descripcion
    }
    console.table(body);
    fetch('http://127.0.0.1:8000/historial_cuidados/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    e.target.reset();
}
</script>

<template>
    <form @submit="submit" class="formulario">
        <div class="registrar_sugerencia_cuidado">
            <div class="selects">
                <div class="select">
                    <label for="">Paciente:</label>
                    <select name="paciente" class="input_doc">
                        <option value="" disabled selected>Seleccione una opción</option>
                        <option v-for="paciente in pacientes" :value="paciente.id">
                            {{ paciente.nombre }}
                        </option>
                    </select>
                </div>
                <div class="select">
                    <label for="">Profesional encargado:</label>
                    <select name="profesional" class="input_doc">
                        <option value="" disabled selected>Seleccione una opción</option>
                        <option v-for="profesional in profesionales" :value="profesional.id">
                            {{ profesional.nombre }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="dates">
                <div class="date_item">
                    <label for="fechaInicial">Fecha inicial:</label>
                    <input class="date" type="date" name="fechaInicial" id="">
                </div>
                <div class="date_item"> 
                    <label for="fechaInicial">Fecha final:</label>
                    <input class="date" type="date" name="fechaFinal" id="">
                </div>
            </div>
            <div class="text_areas">
                <div class="cuidado_area">
                    <label for="cuidado">Cuidado:</label>
                    <textarea name="cuidado" id="cuidado" cols="30" rows="10" class="textarea"></textarea>
                </div>
                <div class="desc_area">
                    <label for="descripcion">Descripción:</label>
                    <textarea name="descripcion" id="" cols="30" rows="10" class="textarea"></textarea>
                </div>
            </div>
            <button type="submit" class="btn-guardar">Guardar</button>
        </div>
    </form>
</template>

<style scoped>
    .formulario{
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .registrar_sugerencia_cuidado{
        background-color: var(--color-gray-100);
        margin: 40px 40px;
        padding: 3em;
        border-radius: 10px;
        width: 50%;
        height: 80%;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    label{
        margin-bottom: 10px;
        font-family: var(--fuente-principal);
        font-size: 16pt;
    }
    
    .select{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .selects{
        width: 80%;
    }

    .input_doc{
        box-sizing: border-box;
        width: 60%;
        height: 45px;
        margin-bottom: 20px;
        border-radius: 7px;
        border: 1px solid var(--color-gray-300);
        padding: 0px 10px;
        font-family: var(--fuente-principal);
        font-size: 14pt;
    }

    .dates{
        margin-bottom: 10px;
        width: 80%;
        display: flex;
        flex-direction: row;
    }

    .date{
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        margin-bottom: 10px;
        border-radius: 7px;
        border: 1px solid var(--color-gray-300);
        padding: 0px 10px;
        font-family: var(--fuente-principal);
        font-size: 14pt;
    }
    .date_item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 20px;
    }

    .text_areas{
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .cuidado_area, .desc_area{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .textarea {
        font-family: var(--fuente-principal);
        font-size: 12pt;
    }

    .cuidado_area{
        height: 100px;
    }
    .desc_area{
        height: 200px;
    }

    .btn-guardar{
        width: 100px;
        height: 40px;
        background-color: var(--color-success);
        color: black;
        border: none;
        border-radius: 5px;
        font-family: var(--fuente-principal);
        font-size: 14pt;
        cursor: pointer;
        margin-top: 20px;
    }

    .btn-guardar:hover{
        background-color: white;
        border: 2px solid var(--color-success);
    }


</style>