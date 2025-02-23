import type { UserDTO } from "@/type/user"

export interface MessageDTO {
  message: String
  from: UserDTO
  to: UserDTO
  timestamp: Date
}