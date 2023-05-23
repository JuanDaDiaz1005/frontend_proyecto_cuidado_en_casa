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
    const idProfesional = Number(e.target.profesional.value);
    const idPaciente = Number(e.target.paciente.value);
    const descripcion = e.target.descripcion.value;
    const fechaFinal = e.target.fechaFinal.value;
    const fechaInicial = e.target.fechaInicial.value;
    const cuidado = e.target.cuidado.value;

    const isCompleteData = idProfesional && idPaciente && descripcion && fechaFinal && fechaInicial && cuidado
    if (!isCompleteData) {
        alert('Todos los campos son obligatorios')
        return
    }

    const data = {
        idProfesional,
        idPaciente,
        descripcion,
        fechaFinal,
        fechaInicial,
        cuidado}

    // aquí va el envío a la API
    setTimeout(() => {
        console.table(data)
        alert('Sugerencia de cuidado registrada')
    }, 2000)

    e.target.reset();
}
</script>

<template>
    <form @submit="submit">
        <div class="selects">
            <select nombre="paciente">
                <option value="" disabled selected>Seleccione un paciente</option>
                <option v-for="paciente in pacientes" :value="paciente.id">
                    {{ paciente.nombre }}
                </option>
            </select>
            <select nombre="profesional">
                <option value="" disabled selected>Seleccione un profesional</option>
                <option v-for="profesional in profesionales" :value="profesional.id">
                    {{ profesional.nombre }}
                </option>
            </select>
        </div>
        <div class="dates">
            <label for="fechaInicial">fechaInicial</label>
            <input class="date" type="date" nombre="fechaInicial" id="">
            <label for="fechaInicial">fechaFinal</label>
            <input class="date" type="date" nombre="fechaFinal" id="">
        </div>
        

        <div>
            <label for="cuidado">
                Cuidado
            </label>
            <textarea nombre="cuidado" id="cuidado" cols="30" rows="10"></textarea>

            <label for="descripcion">
                Descripción
            </label>
            <textarea nombre="descripcion" id="" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Guardar</button>

    </form>
</template>

<style scoped>
* {
    font-size: 1.4rem;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label{
    width: 100%;
    text-align: start;
}

.selects{
    display: flex;
    flex-direction: row;
    justify-content: start;
  
}
#cuidado {
    height: 40px;
}

.date {
    align-self: flex-start;
}


textarea {
    resize: none;
    width: 100%;
}
</style>