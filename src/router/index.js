import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ConsultarPaciente from '../components/ConsultarPaciente.vue'
import RegistrarDiagnostico from '../components/RegistrarDiagnostico.vue'
import RegistrarSugerenciaCuidado from '../components/RegistrarSugerenciaCuidado.vue'
import ConsultarSignosVitales from '../components/ConsultarSignosVitales.vue'
import Ingresar from '../components/Ingresar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/consultar_paciente',
      name: 'consultar_paciente',
      component: ConsultarPaciente
    },
    {
      path: '/registrar_diagnostico',
      name: 'registrar_diagnostico',
      component: RegistrarDiagnostico
    },
    {
      path: '/consultar_paciente/:id/:apellido:nombre/consultar_signos_vitales',
      name: 'consultar_signos_vitales',
      component: ConsultarSignosVitales
    },
    {
      path: '/registrar_sugerencia_cuidado',
      name: 'registrar_sugerencia_cuidado',
      component: RegistrarSugerenciaCuidado
    },
    {
      path: '/ingresar',
      name: 'ingresar',
      component: Ingresar
    }
  ]
})

export default router
