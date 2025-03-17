import axios from "axios";
import TodoApiService from "../TodoServices";
import ERROR_MESSAGES from "@/constants/Errors";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const service = new TodoApiService();

describe('Test of the TodoServices error handling', () => {
  it('should throw an error when adding a todo item fails', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error(ERROR_MESSAGES.TODO.ADD_ITEM))

    await expect(service.addItem({ id: "1", title: "Item 1", done: false, creationDate: new Date() }))
      .rejects.toThrow(ERROR_MESSAGES.TODO.ADD_ITEM)
  })

  it('should throw an error when updating the status of a todo item fails', async () => {
    mockedAxios.put.mockRejectedValueOnce(new Error(ERROR_MESSAGES.TODO.UPDATE_STATE))

    await expect(service.updateTodoState({ id: "1", title: "Item 1", done: false, creationDate: new Date() }))
      .rejects.toThrow(ERROR_MESSAGES.TODO.UPDATE_STATE)
  })

  it('should throw an error when deleting a todo item fails', async () => {
    mockedAxios.delete.mockRejectedValueOnce(new Error(ERROR_MESSAGES.TODO.DELETE_ITEM))

    await expect(service.deleteItem("1")).rejects.toThrow(ERROR_MESSAGES.TODO.DELETE_ITEM)
  })

  it('should throw an error when updating the title of a todo item fails', async () => {
    mockedAxios.put.mockRejectedValueOnce(new Error(ERROR_MESSAGES.TODO.UPDATE_TITLE))

    await expect(service.updateItemTitle("1", "Item 1")).rejects.toThrow(ERROR_MESSAGES.TODO.UPDATE_TITLE)
  })
})