<template>
    <div class="container mt-4">
        <div v-if="course" class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="mb-4">{{ course.title }}</h1>
                <div class="card mb-4">
                    <img :src="course.image" :alt="course.title" class="card-img-top" />
                    <div class="card-body">
                        <p class="card-text">{{ course.description }}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Price:</strong> ${{ course.price }}</li>
                            <li class="list-group-item"><strong>Type:</strong> {{ course.type }}</li>
                            <li class="list-group-item"><strong>Duration:</strong> {{ course.duration }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading course data...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const course = ref(null)

onMounted(async () => {
    const titleURL = route.params.titleURL
    try {
        const response = await fetch(`/v1/courses/${titleURL}`)
        console.log(response)
        const data = await response.json()
        course.value = {
            id: data.id,
            title: data.title,
            author: 'TF Devs',
            image: data.promotionalVimeoLink
                ? `https://vumbnail.com/${data.promotionalVimeoLink}.jpg`
                : 'path/to/default/image.jpg',
            description: data.shortDescription || data.description,
            price: data.price,
            type: data.type,
            duration: data.duration || 'N/A',
        }
    } catch (error) {
        console.error('Error fetching course:', error)
    }
})
</script>
