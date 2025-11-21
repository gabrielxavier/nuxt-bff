import { defineEventHandler } from 'h3'
import { userService } from '@/../server/services/users.service'

export default defineEventHandler(async () => {
    return await userService.getAll()
})
