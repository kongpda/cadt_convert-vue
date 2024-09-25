import { defineStore } from 'pinia'
import axios from 'axios'

export const useApiRepo = defineStore('apiRepo', {
    state: () => ({
        repos: [],
        isLoading: false,
        error: null,
    }),
    actions: {
        async fetchRepos() {
            this.isLoading = true
            this.error = null
            try {
                const response = await axios.get('/v1/courses')
                this.repos = response.data
                console.log(this.repos)
            } catch (err) {
                this.error = err.message || 'Failed to fetch repositories.'
                console.log(this.error)
            } finally {
                this.isLoading = false
            }
        },
    },
})
