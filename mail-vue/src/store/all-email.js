import { defineStore } from 'pinia'

export const useAllEmailStore = defineStore('all-email', {
    state: () => ({
        searchParams: {
            text: '',
            mailbox: '',
            type: 'subject',
            startDate: '',
            endDate: '',
            status: 'all',
        },
    }),
    actions: {
        setSearchParams(params) {
            this.searchParams = {
                ...this.searchParams,
                ...params,
            }
        },
    },
})
