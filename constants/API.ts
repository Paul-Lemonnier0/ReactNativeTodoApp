import { Platform } from "react-native"

const BASE_API_URL = "http://192.168.1.43:8080/todo"
const BASE_API_URL_ANDROID_EMULATOR = "http://10.0.2.2:8080/todo"
const BASE_API_URL_LOCAL_EMULATOR = "http://localhost:8080/todo"

/**
 * Gets the base URL for the API since the emulator uses a different IP address
 * @returns the API base URL to use for the current device
 */
function getBaseURL(isEmulator: boolean): string {
  const isAndroid = Platform.OS === 'android'

  if (isEmulator) {
    return isAndroid ? BASE_API_URL_ANDROID_EMULATOR : BASE_API_URL_LOCAL_EMULATOR
  }

  return BASE_API_URL
}

export default getBaseURL