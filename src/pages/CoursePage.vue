<template>
    <div class="container">
        <h1 class="text-center mb-4">Course Page</h1>
        <div class="row">
            <div v-for="course in courses" :key="course.id" class="col-md-4 mb-4">
                <div class="card h-100">
                    <img :src="course.image" class="card-img-top" alt="Course Image" />
                    <div class="card-body">
                        <router-link :to="`/course/${course.title}`">
                            <h2 class="card-title">{{ course.title }}</h2>
                        </router-link>
                        <p class="card-text">{{ course.description }}</p>
                        <p class="card-text"><strong>Price:</strong> ${{ course.price }}</p>
                        <p class="card-text"><strong>Type:</strong> {{ course.type }}</p>
                        <p class="card-text"><strong>Duration:</strong> {{ course.duration }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const courses = ref([])

// Function to truncate text
const truncateText = (text, length = 100) => {
    if (text.length <= length) return text
    return text.slice(0, length) + '...'
}

onMounted(async () => {
    console.log('CoursePage mounted')
    try {
        const response = await fetch('/v1/courses')
        const data = await response.json()
        console.log(data)
        courses.value = data.map((course) => ({
            id: course.id,
            title: course.title,
            author: 'TF Devs',
            image: course.promotionalVimeoLink
                ? `https://vumbnail.com/${course.promotionalVimeoLink}.jpg`
                : 'path/to/default/image.jpg',
            description: truncateText(course.shortDescription),
            price: course.price,
            type: course.type,
            duration: course.duration || 'N/A',
        }))
    } catch (error) {
        console.error('Error fetching courses:', error)
    }
})
</script>
