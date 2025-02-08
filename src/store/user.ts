import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
  state: () => ({
    id: null as string | null,
    activeChatId: null as number | null
  }),

  actions: {
    setActiveChatId(id: number) {
      this.activeChatId = id
    },

    // User ID
    setUserId(id: string) {
      this.id = id
    },
    removeUserId() {
      this.id = null
    },
  }
})