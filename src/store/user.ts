import { defineStore } from 'pinia'
import type { UserDTO } from "@/type/user"
import type { MessageDTO } from "@/type/message"


export const useClientStore = defineStore('user', {
  state: () => {
    return {
      userId: null as string | null,
      activeChatId: null as string | null,
      message: [] as MessageDTO[]
    }
  },

  actions: {
    setUser(id: string) {
      this.userId = id
    },
    removeUser() {
      this.userId = null
    },
  },
  persist: true,
})