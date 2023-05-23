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
    <form @submit="submit">
        <div class="selects">
            <select name="paciente">
                <option value="" disabled selected>Seleccione un paciente</option>
                <option v-for="paciente in pacientes" :value="paciente.id">
                    {{ paciente.nombre }}
                </option>
            </select>
            <select name="profesional">
                <option value="" disabled selected>Seleccione un profesional</option>
                <option v-for="profesional in profesionales" :value="profesional.id">
                    {{ profesional.nombre }}
                </option>
            </select>
        </div>
        <div class="dates">
            <label for="fechaInicial">fechaInicial</label>
            <input class="date" type="date" name="fechaInicial" id="">
            <label for="fechaInicial">fechaFinal</label>
            <input class="date" type="date" name="fechaFinal" id="">
        </div>
        

        <div>
            <label for="cuidado">
                Cuidado
            </label>
            <textarea name="cuidado" id="cuidado" cols="30" rows="10"></textarea>

            <label for="descripcion">
                Descripción
            </label>
            <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
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