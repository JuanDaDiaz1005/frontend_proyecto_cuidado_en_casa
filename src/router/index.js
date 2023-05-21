import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ConsultarPaciente from '../components/ConsultarPaciente.vue'
import RegistrarDiagnostico from '../components/RegistrarDiagnostico.vue'
import ConsultarSignosVitales from '../components/ConsultarSignosVitales.vue'
import InfoPaciente from '../components/InfoPaciente.vue'
import Ingresar from '../components/Ingresar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/consultar_paciente',
      name: 'consultar_paciente',
      component: ConsultarPaciente
    },
    {
      path: '/consultar_paciente/:nombre',
      name: 'info_paciente',
      component: InfoPaciente
    },
    {
      path: '/registrar_diagnostico',
      name: 'registrar_diagnostico',
      component: RegistrarDiagnostico
    },
    {
      path: '/consultar_paciente/:nombre/consultar_signos_vitales',
      name: 'consultar_signos_vitales',
      component: ConsultarSignosVitales
    },
    {
      path: '/registrar_sugerencia_cuidado',
      name: 'registrar_sugerencia_cuidado',
      component: RegistrarDiagnostico
    },
    {
      path: '/ingresar',
      name: 'ingresar',
      component: Ingresar
    }
  ]
})

export default router
