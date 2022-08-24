import { CreateNotifDTO } from "../../dto/notification.dto"
import NotificationsService from '../../services/notifications.service'

const notificationsService = new NotificationsService()

export const createNotification = async (notif: CreateNotifDTO) => {
  try {
    const newNotif = await notificationsService.createNotification(notif)
    return newNotif
  } catch (err) {
    console.error('ErrCreatingNotif: ', err)
  }
}