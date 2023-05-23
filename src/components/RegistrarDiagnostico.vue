<script setup> 
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template> 
     <form @submit="submit" class="formulario">
        <div class="registrar_diagnostico">
            <div class="text_areas">
                <div class="nombre_area">
                    <label for="nombre">Nombre:</label>
                    <textarea name="nombre" id="nombre" cols="30" rows="10" class="textarea"></textarea>
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