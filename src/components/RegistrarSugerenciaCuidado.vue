<script setup>
import { onMounted, ref } from 'vue';

const prioridades = ref([
    { value: '1', text: 'Prioridad 1' },
    { value: '2', text: 'Prioridad 2' },
    { value: '3', text: 'Prioridad 3' },
    { value: '4', text: 'Prioridad 4' },
    { value: '5', text: 'Prioridad 5' },])

const pacientes = ref([])

onMounted(() => {
    // los pacientes se obtienen de la API
    setTimeout(() => {
        pacientes.value = [
            { id: 1, nombre: "Juan Bernardo" },
            { id: 2, nombre: "Arturo Calle" },
            { id: 3, nombre: "Juan Camilo" },
        ]
    }, 2000)
})

const vSubmit = (e) => {
    e.preventDefault();
    const prioridad = Number(e.target.prioridad.value);
    const idPaciente = Number(e.target.paciente.value);
    const descripcion = e.target.descripcion.value;
    const contraIndicaciones = e.target.contraIndicaciones.value;

    if (!prioridad || !idPaciente || !descripcion || !contraIndicaciones) {
        alert('Todos los campos son obligatorios')
        return
    }

    const data = {
        prioridad,
        idPaciente,
        descripcion,
        contraIndicaciones
    }

    // aquí va el llamado a la API
    setTimeout(() => {
        console.table(data)
        alert('Sugerencia de cuidado registrada')
    }, 2000)

    e.target.reset();
}
</script>

<template>
    <form @submit="vSubmit">
        <div>
            <select name="prioridad">
                <option value="" disabled selected>Seleccione una prioridad</option>
                <option v-for="prioridad in prioridades" :value="prioridad.value">
                    {{ prioridad.text }}
                </option>
            </select>
            <select name="paciente">
                <option value="" disabled selected>Seleccione un paciente</option>
                <option v-for="paciente in pacientes" :value="paciente.id">
                    {{ paciente.nombre }}
                </option>
            </select>
        </div>


        <div>
            <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
            <textarea name="contraIndicaciones" id="" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Guardar</button>

    </form>
</template>

<style scoped></style>