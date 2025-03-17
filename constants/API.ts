import { Platform } from "react-native"

// Whether the app is running on an emulator or not
const IS_EMULATOR = false

// The IP address of the machine running the API. Needed to be entered manually if you are not using an emulator (eg. a physical device)
const IP_ADDRESS = "192.168.1.76"

// The port the API is running on
const PORT = "8080"

// The base URL of the API (used for physical devices)
const BASE_API_URL = `http://${IP_ADDRESS}:${PORT}/todo`

// The base URL of the API (used for Android emulators)
const BASE_API_URL_ANDROID_EMULATOR = "http://10.0.2.2:8080/todo"

// The base URL of the API (used for iOS emulators)
const BASE_API_URL_LOCAL_EMULATOR = "http://localhost:8080/todo"

/**
 * Gets the base URL for the API since the emulator uses a different IP address
 * @returns the API base URL to use for the current device
 */
function getBaseURL(): string {
  const isAndroid = Platform.OS === 'android'

  if (IS_EMULATOR) {
    return isAndroid ? BASE_API_URL_ANDROID_EMULATOR : BASE_API_URL_LOCAL_EMULATOR
  }

  return BASE_API_URL
}

export default getBaseURL