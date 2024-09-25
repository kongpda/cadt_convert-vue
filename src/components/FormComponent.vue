<!-- FormComponent.vue -->
<template>
    <div class="container mx-auto mt-4 p-4">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="text" v-model="formData.email" id="email" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" v-model="formData.password" id="password" class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FormComponent',
    data() {
        return {
            token: '',
            error: '',
            formData: {
                email: 'admin@tfdevs.com',
                password: 'adminpassword',
            },
        }
    },
    methods: {
        resetForm() {
            this.formData.email = ''
            this.formData.password = ''
        },
        async handleSubmit() {
            try {
                const response = await axios.post('/v1/auth/login', this.formData)
                this.token = response.data.token
                console.log('Login response:', response.data)
                localStorage.setItem('tokenSet', response.data.accessToken)
                console.log('Token set:', localStorage.getItem('tokenSet'))
                // this.resetForm()
                // Handle successful login here
                this.$router.push('/dashboard')
            } catch (error) {
                this.error = error.response.data.message
                console.error('Login error:', error)
                // Handle login error here
            }
        },
    },
}
</script>
