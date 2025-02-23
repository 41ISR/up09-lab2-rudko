import { defineStore } from 'pinia'
import type { UserDTO } from "@/type/user"
import type { MessageDTO } from "@/type/message"


export const useUserStore = defineStore('user', {
  state: () => {
    return {
      id: null as string | null,
      activeChatId: null as number | null,
      message: [] as MessageDTO[]
    }
  },

  actions: {
    setUser(id: string) {
      this.id = id
    },
    removeUser() {
      this.id = null
    },
  },
  persist: true,
})