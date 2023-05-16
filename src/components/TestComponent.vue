<template>
    <div>
        <h2>Test Component</h2>
        <p>Esta es una página de prueba</p>
        <button @click="increment()">Incrementar</button>
        <button @click="counter--">Decrementar</button>
        <p>Contador: {{ counter }}</p>
        <span>{{ title }}</span>
    </div>
    
    <div class="images">
        <span v-for="image in images" :key="image">
            <img :src="image" alt="image" />
        </span>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { onMounted, onUpdated } from 'vue'
const counter = ref(0)
const title = ref('untitled...')
const images = ref([])

const increment = () => {
  counter.value++
  getProducts()
}

const getProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/${counter.value}`)
    const product = await response.json()
    title.value = product.title
    images.value = product.images
}

</script>
                
<style scoped>
h2 {
    color: red;
}


</style>