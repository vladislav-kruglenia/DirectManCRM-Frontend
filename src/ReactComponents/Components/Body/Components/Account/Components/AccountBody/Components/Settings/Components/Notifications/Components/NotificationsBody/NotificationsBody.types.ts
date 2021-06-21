export type NotificationsBodyProps = {
    notificationsData: NotificationData[],
}

export type NotificationData = {
    notificationId: string,
    notificationTitle: string,
    notificationText: string,
    notificationDate: string,
}