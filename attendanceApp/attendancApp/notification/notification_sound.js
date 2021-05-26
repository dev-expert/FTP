import PushNotification from 'react-native-push-notification';

PushNotification.createChannel({
    channelId: 'Luckyy',
    channelName: 'Luck',
  });

const showNotification = (title, message) => {
    PushNotification.localNotification({
        channelId: 'Luckyy',
        title: title,
        message: message,
    });
};

const handleScheduleNotification = (title, message) => {
    PushNotification.localNotificationSchedule({
        channelId: 'Luckyy',
        title: title,
        message: message,
        date: new Date(Date.now() + 10 * 1000),
    });
};



const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
};

export { showNotification, handleScheduleNotification, handleCancel }