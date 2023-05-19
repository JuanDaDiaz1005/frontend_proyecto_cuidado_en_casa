<script setup>
import { ref } from 'vue'
const leftDate = ref('')
const rightDate = ref('')
const signosVitales = ref([])


const temporalUseCase = [
    {
        "id": 41,
        "fecha": "2022-01-01 08:00:00",
        "nombre_signo": "Temperatura",
        "unidad": "°C",
        "valor": 120.0
    },
    {
        "id": 51,
        "fecha": "2022-01-02 08:00:00",
        "nombre_signo": "Temperatura",
        "unidad": "°C",
        "valor": 90.0
    },
    {
        "id": 42,
        "fecha": "2022-01-01 08:30:00",
        "nombre_signo": "Frecuencia cardíaca",
        "unidad": "ppm",
        "valor": 80.0
    },
    {
        "id": 43,
        "fecha": "2022-01-01 09:00:00",
        "nombre_signo": "Presión arterial sis",
        "unidad": "mmHg",
        "valor": 16.0
    },
    {
        "id": 44,
        "fecha": "2022-01-01 09:30:00",
        "nombre_signo": "Presión arterial dia",
        "unidad": "mmHg",
        "valor": 90.0
    },
    {
        "id": 45,
        "fecha": "2022-01-01 10:00:00",
        "nombre_signo": "Frecuencia respirato",
        "unidad": "rpm",
        "valor": 70.0
    },
    {
        "id": 46,
        "fecha": "2022-01-01 10:30:00",
        "nombre_signo": "Saturación de oxígen",
        "unidad": "%",
        "valor": 100.0
    },
    {
        "id": 47,
        "fecha": "2022-01-01 11:00:00",
        "nombre_signo": "Glucemia",
        "unidad": "mg/d",
        "valor": 110.0
    },
    {
        "id": 48,
        "fecha": "2022-01-01 11:30:00",
        "nombre_signo": "Peso",
        "unidad": "kg",
        "valor": 80.0
    },
    {
        "id": 49,
        "fecha": "2022-01-01 12:00:00",
        "nombre_signo": "Altura",
        "unidad": "cm",
        "valor": 70.0
    },
    {
        "id": 50,
        "fecha": "2022-01-01 12:30:00",
        "nombre_signo": "IMC",
        "unidad": "kg/m",
        "valor": 120.0
    }
]

const getSignosVitales = () => {

    const rightDateStr = getDateTimeStr(rightDate.value?.value)
    const leftDateStr = getDateTimeStr(leftDate.value?.value)

    if (!leftDateStr || !rightDateStr) return

    setTimeout(() => {
        signosVitales.value = temporalUseCase
        console.table(signosVitales.value);
    }, 2000);

    console.log('leftDate', leftDateStr, 'rightDate', rightDateStr);
}

// funcion para extraer la fecha string en formato "2022-01-01 08:00:00" de un objedo Date.
const getDateTimeStr = (date) => {
    if (!date) return
    const dateStrFormat = date.replace('T', ' ') + ':00';
    return dateStrFormat
}
</script>

<template>
    <div>
        <input @change="getSignosVitales()" class="date" type="datetime-local" name="leftDate" id="leftDate" ref="leftDate">
        <input @change="getSignosVitales()" class="date" type="datetime-local" name="rightDate" id="rightDate"
            ref="rightDate">
    </div>
    <div>
        <body v-if="signosVitales.length == 0">
                <img src="..\assets\Loading_icon.gif" alt="">
            </body>
        <table v-else>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Signo Vital</th>
                    <th>Valor</th>
                    <th>Unidades</th>
                </tr>
            </thead>

            <tr v-for="signoVital, i in signosVitales" :key="i">
                <td>{{ signoVital.fecha }}</td>
                <td>{{ signoVital.nombre_signo }}</td>
                <td>{{ signoVital.valor }}</td>
                <td>{{ signoVital.unidad }}</td>
            </tr>

        </table>

    </div>
</template>

<style scoped>
* {
    font-size: 1.5rem;
}

table {
    border-collapse: collapse;
    width: 70%;
}
</style>

