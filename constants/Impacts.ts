import * as Haptics from 'expo-haptics';

/**
 * Creates a little vibration on the phone
 */
export const BaseImpact = () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

/**
 * Creates an error vibration on the phone
 */
export const ErrorImpact = () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
