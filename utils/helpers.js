
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo'

export const NOTIFICATION_KEY = "Notification_key";

export const clearAllData = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log('CLEAR DATA ERRO: ' + e);
    }
}

// export const logAllData = async () => {
//     try {
//         const keys = await AsyncStorage.getAllKeys()
//         const items = await AsyncStorage.multiGet(keys)
//         console.log('CONSOLE LOG ALL DATA: ' + items)
//     } catch (error) {
//         console.log('CONSOLE LOG ALL DATA ERRO: ' + error)
//     }
// }

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Time to study!',
        body: "Don't forget to study today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(16)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}