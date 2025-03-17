import axios from "axios";
import TodoItem from "@/types/TodoType";
import ERROR_MESSAGES from "@/constants/Errors";
import TodoApiService from "../TodoServices";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const service = new TodoApiService();

describe('Test of the TodoServices', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should correctly fetch the todo items', async () => {

    const mockedItems: TodoItem[] = [
      { id: "1", title: "Item 1", done: false, creationDate: new Date() },
      { id: "2", title: "Item 2", done: true, creationDate: new Date() }
    ]

    mockedAxios.get.mockResolvedValueOnce({ data: mockedItems })

    const items = await service.fetchItems()

    expect(mockedAxios.get)
      .toHaveBeenCalledWith(
        expect.stringContaining("/all"),
        expect.any(Object)
      );

    expect(items).toEqual(mockedItems);
  })

  it('should correctly add a todo item', async () => {
    const item: TodoItem = { id: "1", title: "Item 1", done: false, creationDate: new Date() }

    await service.addItem(item)

    expect(mockedAxios.post)
      .toHaveBeenCalledWith(
        expect.stringContaining("/create"),
        { title: item.title },
        expect.any(Object)
      );
  })

  it('should correctly add a todo item with special characters in the title', async () => {
    const item: TodoItem = { id: "1", title: "🚀💡 Special!@#$", done: false, creationDate: new Date() };

    await service.addItem(item);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      expect.stringContaining("/create"),
      { title: item.title },
      expect.any(Object)
    );
  });


  it('should correctly update the status of a todo item', async () => {
    const item: TodoItem = { id: "1", title: "Item 1", done: false, creationDate: new Date() }

    await service.updateTodoState(item)

    expect(mockedAxios.put)
      .toHaveBeenCalledWith(
        expect.stringContaining(`/state/${item.id}/${item.done}`),
        expect.any(Object)
      );
  })

  it('should correctly delete a todo item', async () => {
    const id = "1"

    await service.deleteItem(id)

    expect(mockedAxios.delete)
      .toHaveBeenCalledWith(
        expect.stringContaining(`/delete/${id}`),
        expect.any(Object)
      );
  })

  it('should correctly update the title of a todo item', async () => {
    const id = "1"
    const title = "Item 1"

    await service.updateItemTitle(id, title)

    expect(mockedAxios.put)
      .toHaveBeenCalledWith(
        expect.stringContaining(`/updateTodoTitle/${id}/${title}`),
        expect.any(Object)
      );
  })
})