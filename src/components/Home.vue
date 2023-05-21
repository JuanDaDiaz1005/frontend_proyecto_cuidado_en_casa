<script setup> 
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template> 
        <main>
            <div class="container">
                <div class="texto1">
                        Cuidado en casa
                </div>
                <div class="texto1">
                        nos cuidamos mientras te cuidamos
                </div>
                <img class="img1" src="../assets/images/1140-pre-hospice-palliative-care-esp.png" alt="imagen del cuidado en casa de una persona de la tercera edad">
            </div>
            
            <div class="texto_info">
                <p class="parrafo_home">
                    El cuidado hospitalario en casa es una modalidad de atención médica que ha cobrado gran importancia en los últimos años. Consiste en brindar a los pacientes la posibilidad de recibir cuidados y tratamientos médicos en la comodidad de su hogar, en lugar de permanecer hospitalizados. Esta forma de atención se ha vuelto cada vez más popular debido a sus numerosos beneficios tanto para los pacientes como para el sistema de salud en general.
                </p>
                <p class="parrafo_home">
                    En primer lugar, el cuidado hospitalario en casa proporciona un entorno más familiar y cómodo para el paciente. Estar rodeado de su familia y su entorno habitual puede tener un impacto positivo en su bienestar emocional y mental, lo que a su vez puede contribuir a una recuperación más rápida. Además, estar en casa permite a los pacientes mantener su autonomía y participar activamente en su propio cuidado, lo que puede aumentar su motivación y mejorar su estado de ánimo.
                </p>
                <p class="parrafo_home">
                    Además del bienestar del paciente, el cuidado hospitalario en casa también tiene beneficios económicos. Al reducir el número de pacientes hospitalizados, se disminuyen los costos asociados con la estancia en el hospital, como los gastos de alojamiento, alimentación y personal médico. Esto puede aliviar la carga financiera tanto para los pacientes como para los sistemas de salud, permitiendo asignar recursos de manera más eficiente y brindar atención a un mayor número de personas.
                </p>
                <p class="parrafo_home">
                    Otro aspecto importante del cuidado hospitalario en casa es la reducción de riesgos de infecciones. Los hospitales son entornos propensos a la proliferación de bacterias y virus, lo que aumenta el riesgo de contraer infecciones nosocomiales. Al recibir atención médica en casa, los pacientes están expuestos a un menor número de patógenos y tienen un menor riesgo de adquirir enfermedades adicionales durante su tratamiento.
                </p>
                <p class="parrafo_home">
                    Asimismo, el cuidado hospitalario en casa fomenta una atención más personalizada y centrada en el paciente. Al estar en un entorno familiar, los profesionales de la salud pueden brindar una atención más individualizada, adaptando los tratamientos y cuidados a las necesidades específicas de cada paciente. Esto promueve una relación más estrecha entre el paciente y su equipo médico, lo que puede mejorar la comunicación, la confianza y la adherencia al tratamiento.
                </p>
                <p class="parrafo_home">
                    Es importante destacar que el cuidado hospitalario en casa no es aplicable a todos los pacientes y situaciones. En algunos casos, la hospitalización puede ser necesaria debido a la gravedad de la enfermedad o a la necesidad de atención médica especializada. Sin embargo, para muchos pacientes con enfermedades crónicas estables, recuperación postoperatoria o cuidados paliativos, el cuidado hospitalario en casa puede ser una alternativa segura y efectiva.
                </p>
                <p class="parrafo_home">
                    En conclusión, el cuidado hospitalario en casa desempeña un papel crucial en la atención médica actual. Su importancia radica en los beneficios que ofrece tanto para los pacientes como para el sistema de salud en general. Proporciona un entorno familiar y cómodo, reduce los costos hospitalarios, disminuye los riesgos de infecciones, promueve una atención personalizada y fomenta la participación activa del paciente en su propio cuidado. El cuidado hospitalario en casa representa un enfoque integral y humano para brindar atención médica, mejorando la calidad de vida de los pacientes y optimizando los recursos disponibles.
                </p>
            </div>
            
        </main>

</template>

<style> 
    .container{
        position: relative;
        display: inline-block;
        width: 100%;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    .container .img1 {
        display: block;
        width: 100%;
        opacity: 0.6;
    }

    .container .texto1:nth-child(1){
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        color: black;
        padding: 10px;
        font-size: 65pt;
        font-weight: bolder;
        font-family: var(--fuente-principal);
    }

    .container .texto1:nth-child(2){
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        color: black;
        padding: 10px;
        font-size: 30pt;
        font-weight: 500;
        font-family: var(--fuente-principal);
    }

    .parrafo_home{
        font-size: 16pt;
        font-weight: 500;
        font-family: var(--fuente-principal);
        margin: 0 40px 30px 40px;
        text-align: justify;
    }

    .parrafo_home:last-child{
        margin-bottom: 0px;
    }

    .texto_info{
        margin: 30px 0px;
    }
</style>