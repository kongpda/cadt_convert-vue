<template>
    <div>
        <h1>Available Courses</h1>
        <button @click="fetchRepos" :disabled="isLoading">
            {{ isLoading ? 'Loading...' : 'Fetch Courses' }}
        </button>

        <div v-if="error" class="error">Error: {{ error }}</div>

        <ul v-if="repos.length">
            <li v-for="repo in repos" :key="repo.id">
                <a :href="repo.paymentLink" target="_blank">{{ repo.title }}</a>
                <p v-html="repo.description"></p>
                <p>
                    <strong>Price:</strong> ${{ repo.price }} | <strong>Type:</strong> {{ repo.type }} |
                    <strong>Status:</strong> {{ repo.status }}
                </p>
                <p>
                    <strong>Created Date:</strong> {{ formatDate(repo.createdDate) }} | <strong>Updated Date:</strong>
                    {{ formatDate(repo.updatedDate) }}
                </p>
                <p v-if="repo.deletedDate"><strong>Deleted Date:</strong> {{ formatDate(repo.deletedDate) }}</p>
                <a :href="repo.promotionalVimeoLink" target="_blank">Promotional Video</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted, watch } from 'vue'
import { useApiRepo } from '../stores/apiRepo'
import { storeToRefs } from 'pinia'

export default {
    setup() {
        const reposStore = useApiRepo()
        const { repos, isLoading, error } = storeToRefs(reposStore)
        const { fetchRepos } = reposStore

        // Fetch repos on component mount
        onMounted(() => {
            fetchRepos()
        })

        // Watch for changes in repos and log them
        watch(repos, (newRepos) => {
            console.log('Repos updated:', newRepos)
        })

        // Helper function to format dates
        const formatDate = (dateStr) => {
            if (!dateStr) return 'N/A'
            const date = new Date(dateStr)
            return date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
        }
        return {
            repos,
            isLoading,
            error,
            fetchRepos,
            formatDate,
        }
    },
}
</script>

<style scoped>
.error {
    color: red;
    margin-top: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
}

a {
    font-weight: bold;
    color: #0366d6;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
