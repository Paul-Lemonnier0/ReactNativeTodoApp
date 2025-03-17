const ERROR_MESSAGES = {
  TODO: {
    FETCH_ITEMS: "Failed to load items",
    ADD_ITEM: "Failed to add item",
    UPDATE_STATE: "Failed to update item",
    DELETE_ITEM: "Failed to delete item",
    UPDATE_TITLE: "Failed to update title",
  },
  USER: {
    FETCH_PREFERENCES: "Failed to load user preferences",
  },
  GENERAL: {
    NETWORK_ERROR: "Network error, please try again",
    UNKNOWN_ERROR: "An unknown error occurred",
  },

  API: {
    SERVER_ERROR: "Server error",
    CLIENT_ERROR: "Client error",
    FORMAT_RESPONSE_ERROR: "Error formatting response",
    NETWORK_ERROR: "Network error",
    UNKNOWN_ERROR: "An unknown error occurred",
  },

  STORAGE: {
    GET_ERROR: "Failed to get item from storage",
    SET_ERROR: "Failed to set item in storage",
    REMOVE_ERROR: "Failed to remove item from storage",
  }
};

export default ERROR_MESSAGES;
