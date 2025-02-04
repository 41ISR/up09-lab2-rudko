import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        return { "id": null, "active_chat_id": null }
    }),


    actions: {
        setActiveChatId(id: number) {
            this.active_chat_id = id
        },

    }