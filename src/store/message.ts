import { defineStore } from 'pinia'
import type { MessageDTO } from "@/type/message"


export const useMessageStore = defineStore('user', {
  state: () => {
    return {
      message: Array<String>
    }
  },

  actions: {
  },
  persist: true,
})