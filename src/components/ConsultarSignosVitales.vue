<script setup>
import { ref } from 'vue'
const leftDate = ref('')
const rightDate = ref('')
const signosVitales = ref([])
const validDateRange = ref(true)


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

    signosVitales.value = []
    const rightDateStr = getDateTimeStr(rightDate.value?.value)
    const leftDateStr = getDateTimeStr(leftDate.value?.value)
    const rightDateTimestamp = (new Date(rightDate.value?.value).getTime())
    const leftDateTimestamp = (new Date(leftDate.value?.value).getTime())

    if (!leftDateStr || !rightDateStr) return
    if (rightDateTimestamp < leftDateTimestamp) {
        validDateRange.value = false
        alert('¡ Rango de fechas inválido !')
        return
    }

    validDateRange.value = true

    const body = {
        "id": 3,
        "fecha_inicio": leftDateStr,
        "fecha_fin": rightDateStr
    }
    console.log(body);
    fetch('http://127.0.0.1:8000/signo_vital/consultar_signos_vitales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => signosVitales.value = data)
}

const getDateTimeStr = (date) => {
    if (!date) return
    const dateStrFormat = date.replace('T', ' ') + ':00';
    return dateStrFormat
}
</script>

<template>
     <div v-if="signosVitales.length == 0" class="title">
            <div>Ingrese el rango de fechas en el que desea conocer los signos vitales del paciente</div>
     </div>
    <div class="inputs-container">
        <div>
            <label>Fecha inicial:</label>
            <input @change="getSignosVitales()" class="date" :class="validDateRange ? '' : 'dangerDate'" type="datetime-local"
            name="leftDate" id="leftDate" ref="leftDate">
        </div>
        <div>
            <label>Fecha inicial:</label>
            <input @change="getSignosVitales()" class="date" :class="validDateRange ? '' : 'dangerDate'" type="datetime-local"
            name="rightDate" id="rightDate" ref="rightDate">
        </div>
    </div>
    <div class="tabla">
        <div v-if="signosVitales.length == 0" class="gif_carga">
            <img src="..\assets/images/Loading_icon.gif" alt="">
        </div>
        <div v-else >
            <table>
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
                    <td>{{ signoVital.signo_vital.nombre_signo }}</td>
                    <td>{{ signoVital.valor }}</td>
                    <td>{{ signoVital.signo_vital.unidad }}</td>
                </tr>

            </table>
        </div>

    </div>
</template>

<style scoped>
* {
    font-size: 1.5rem;
}

.inputs-container {
    display: flex;
    justify-content: space-around;
    margin: 20px 0 0 0;
}

main {
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
}

table {
    border-collapse: collapse;
    width: 100%;
}

table thead {
    background-color: var(--color-soft-blue);
    color: var(--color-gray-900);
}

table td,
table th {
    border: 2px solid var(--color-gray-800);
    padding: 8px;
    width: ;
}

.dangerDate {
    border-color: var(--color-danger);
}

.title{
    display: flex;
    justify-content:center ;
    font-family: var(--fuente-principal);
    margin: 20px 0px;
}

.gif_carga{
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    height: 100px;
}

.tabla{
    margin-top: 20px;
    margin-bottom: 30px;
}

label{
    font-family: var(--fuente-principal);
    margin-right: 20px;
}
</style>

