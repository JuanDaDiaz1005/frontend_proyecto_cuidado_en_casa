<script setup>
import { ref } from 'vue'
const leftDate = ref('')
const rightDate = ref('')
const signosVitales = ref([])
const validDateRange = ref(true)

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
    <div class="tabla_espacio">
        <div v-if="signosVitales.length == 0" class="gif_carga">
            <img src="..\assets/images/Loading_icon.gif" alt="">
        </div>
        <div v-else class="tabla">
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
    font-family: var(--fuente-principal);
    font-size: 15pt;
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
    width: 80%;
}

table thead {
    background-color: var(--color-soft-blue);
    color: var(--color-gray-900);
}

table th{
    box-sizing: border-box;
    padding: 15px 10px;
    margin-bottom: 5px;
    margin-right: 10px;
}

table td {
    box-sizing: border-box;
    /* border: none; */
    border: 5px solid white;
    background-color: var(--color-gray-100);
    padding: 15px 10px;
    margin-bottom: 5px;
    margin-right: 10px;
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

.tabla_espacio{
    margin-top: 20px;
    margin-bottom: 30px;
    height: 100vh;
}

.tabla{
    display:flex;
    justify-content: center;
}

label{
    font-family: var(--fuente-principal);
    margin-right: 20px;
}
</style>



