import ERROR_MESSAGES from "@/constants/Errors";
import axios from "axios";

const handleApiError = (error: any, prefix?: string) => {

  const validPrefix = prefix ? (prefix + ": ") : "";
  const formatError: (msg: string) => string = (errorMessage: string) => validPrefix + errorMessage;

  if(error.response) {
    console.log(error.response);
    const status = error.response.status;

    if (status >= 500) {
      throw new Error(
        formatError(ERROR_MESSAGES.API.SERVER_ERROR)
      );
    }

    else if (status >= 400) {
      throw new Error(
        formatError(ERROR_MESSAGES.API.CLIENT_ERROR)
      );
    }

    throw new Error(
      formatError(ERROR_MESSAGES.API.FORMAT_RESPONSE_ERROR)
    );
  }

  else if(error.request) {
    throw new Error(
      formatError(ERROR_MESSAGES.API.NETWORK_ERROR)
    );
  }

  else {
    throw new Error(
      formatError(ERROR_MESSAGES.API.UNKNOWN_ERROR)
    );
  }
}

export default handleApiError;