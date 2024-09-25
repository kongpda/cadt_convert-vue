<template>
    <div class="container mt-4">
        <h1 class="mb-4">Dashboard</h1>
        <div v-if="users.length" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div v-for="user in users" :key="user.id" class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">{{ user.firstname }} {{ user.lastname }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
                        <p class="card-text">
                            <strong>Email:</strong> {{ user.email }}<br />
                            <strong>Status:</strong> {{ user.status }}<br />
                            <strong>Registration:</strong> {{ user.registrationType }}
                        </p>
                    </div>
                    <div class="card-footer text-muted">
                        <small>Created: {{ new Date(user.createdDate).toLocaleDateString() }}</small>
                    </div>
                </div>
            </div>
        </div>
        <p v-else class="alert alert-info">No users found.</p>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const users = ref([])

const token = localStorage.getItem('tokenSet')

if (!token) {
    router.push('/form-login')
}

onMounted(async () => {
    try {
        const response = await axios.get('/v1/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        users.value = response.data
        console.log('Users fetched:', users.value)
    } catch (error) {
        console.error('Error fetching users:', error)
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized access, redirecting to login')
            router.push('/form-login')
        }
    }
})
</script>
