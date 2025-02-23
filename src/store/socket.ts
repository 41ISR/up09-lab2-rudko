import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

const useSocketStore = defineStore('socketStore', () => {
  const socket = io(import.meta.env.VITE_WS_URL)

  socket.on('connect', () => {
    console.log('Connected to socket server')
  })

  return { socket }
})

export default useSocketStore
