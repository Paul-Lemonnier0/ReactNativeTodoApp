import axios from "axios";
import TodoApiService from "../TodoServices";
import ERROR_MESSAGES from "@/constants/Errors";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const service = new TodoApiService();

describe('Test of the fetch items TodoItemService error handling', () => {
  it('should throw a CLIENT_ERROR when API returns 4xx response', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 404 },
      isAxiosError: true,
    });

    const expectedErrorMessage = ERROR_MESSAGES.TODO.FETCH_ITEMS + ": " + ERROR_MESSAGES.API.CLIENT_ERROR;

    await expect(service.fetchItems()).rejects.toThrow(expectedErrorMessage);
  });

  it('should throw a SERVER_ERROR when API returns 5xx response', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 500 },
      isAxiosError: true,
    });

    const expectedErrorMessage = ERROR_MESSAGES.TODO.FETCH_ITEMS + ": " + ERROR_MESSAGES.API.SERVER_ERROR;

    await expect(service.fetchItems()).rejects.toThrow(expectedErrorMessage);
  });

  it('should throw a NETWORK_ERROR when there is no response from the server', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      request: {},
      isAxiosError: true,
    });

    const expectedErrorMessage = ERROR_MESSAGES.TODO.FETCH_ITEMS + ": " + ERROR_MESSAGES.API.NETWORK_ERROR;

    await expect(service.fetchItems()).rejects.toThrow(expectedErrorMessage);
  });

  it('should throw an UNKNOWN_ERROR for unexpected errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Unexpected error"));

    const expectedErrorMessage = ERROR_MESSAGES.TODO.FETCH_ITEMS + ": " + ERROR_MESSAGES.API.UNKNOWN_ERROR;

    await expect(service.fetchItems()).rejects.toThrow(expectedErrorMessage);
  });
});
