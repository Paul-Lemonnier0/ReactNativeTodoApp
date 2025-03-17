import TodoItem from '@/types/TodoType';
import getBaseURL from '@/constants/API';
import axios from 'axios';
import ERROR_MESSAGES from '@/constants/Errors';
import handleApiError from '@/utils/errors/apiErrorHandler';

const IS_EMULATOR = false

/**
 * Service class to interact with the Todo API
 * Provides methods to fetch, add, update, and delete todo items
 */
class TodoApiService {
  private baseUrl: string = getBaseURL(IS_EMULATOR);
  private baseHeaders = { 'Content-Type': 'application/json' };

  /**
   * Fetches the todo items from the API
   * @returns - The list of todo items
   */
  async fetchItems(): Promise<TodoItem[]> {
    try {
      const response = await axios.get<TodoItem[]>(`${this.baseUrl}/all`, {
        headers: this.baseHeaders,
      });

      return response.data ?? [];
    } catch (error) {
      handleApiError(error, ERROR_MESSAGES.TODO.FETCH_ITEMS);
    }

    return []
  }

  /**
   * Adds a new todo item to the API
   * @param item - The todo item to add
   */
  async addItem(item: TodoItem): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/create`, { title: item.title }, {
        headers: this.baseHeaders,
      });
    } catch (error) {
      throw new Error(ERROR_MESSAGES.TODO.ADD_ITEM);
    }
  }

  /**
   * Updates the status of a todo item
   * @param item - The todo item to update
   */
  async updateTodoState(item: TodoItem): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/state/${item.id}/${item.done}`, {
        headers: this.baseHeaders,
      });
    } catch (error) {
      throw new Error(ERROR_MESSAGES.TODO.UPDATE_STATE);
    }
  }

  /**
   * Deletes a todo item from the API
   * @param id - The id of the todo item to delete
   */
  async deleteItem(id: string): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/delete/${ id }`, {
        headers: this.baseHeaders,
      });
    } catch (error) {
      throw new Error(ERROR_MESSAGES.TODO.DELETE_ITEM);
    }
  }

  /**
   * Updates the title of a todo item
   * @param id - The id of the todo item to update
   * @param title - The new title of the todo item
   */
  async updateItemTitle(id: string, title: string): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/updateTodoTitle/${id}/${title}`, {
        headers: this.baseHeaders,
      });
    } catch (error) {
      throw new Error(ERROR_MESSAGES.TODO.UPDATE_TITLE);
    }
  }
}

export default TodoApiService;
