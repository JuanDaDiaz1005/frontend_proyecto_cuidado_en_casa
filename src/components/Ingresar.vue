<script setup> 
</script>

<template> 
    <form class="formulario">
        <div class="ingresar">
            <div class="text_areas">
                <div class="nombre_area">
                    <label for="nombre">Usuario:</label>
                    <input name="nombre" type="text" id="nombre" class=" input_doc"/>
                </div>
                <div class="desc_area">
                    <label for="descripcion">Contraseña:</label>
                    <input type="password" class="input_doc">
                </div>
            </div>
            <button type="submit" class="btn-guardar">Iniciar sesión</button>
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

    .ingresar{
        box-sizing: border-box;
        background-color: var(--color-gray-100);
        margin: 40px 40px;
        padding: 4em;
        border-radius: 10px;
        width: 55%;
        height: 50%;
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

    .input_doc{
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

    .btn-guardar{
        width: 35%;
        height: 40px;
        background-color: var(--color-success);
        color: black;
        border: none;
        border-radius: 5px;
        font-family: var(--fuente-principal);
        font-size: 14pt;
        cursor: pointer;
    }

    .btn-guardar:hover{
        background-color: white;
        border: 2px solid var(--color-success);
    }
</style>