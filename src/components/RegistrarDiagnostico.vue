<script setup> 
    import { RouterLink, RouterView } from 'vue-router'
    const submit = (e) => {
    e.preventDefault();

    const descripcion = e.target.descripcion?.value;
    const nombre = e.target.nombre?.value;

    const isCompleteData = descripcion && nombre
    if (!isCompleteData) {
        alert('Todos los campos son obligatorios')
        return
    }
    // aquí va el envío a la API
    const body = {
        "nombre_diagnostico": nombre,
        "descripcion": descripcion
    }
    console.table(body);
    fetch('http://127.0.0.1:8000/diagnostico/post', {
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
        <div class="registrar_diagnostico">
            <div class="text_areas">
                <div class="nombre_area">
                    <label for="nombre">Nombre:</label>
                    <input name="nombre" id="nombre" class=" input_doc"/>
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

    .registrar_diagnostico{
        background-color: var(--color-gray-100);
        margin: 40px 40px;
        padding: 3em;
        border-radius: 10px;
        width: 50%;
        height: 60%;
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

    .text_areas{
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .nombre_area, .desc_area{
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