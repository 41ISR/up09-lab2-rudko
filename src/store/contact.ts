import { defineStore } from 'pinia';
import type { UserDTO } from "@/type/user";

export const useContactStore = defineStore('contacts', {
  state: () => {
    return {
      contacts: [] as UserDTO[]
    };
  },

  actions: {
    setContacts(newContacts: UserDTO[]) {
      this.contacts = newContacts;
    }
  },
  persist: true,
});
