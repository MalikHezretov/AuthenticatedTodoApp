import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TodoModel} from '../../models/todoModel';
import uuid from 'react-native-uuid';

const initialState = [] as TodoModel[];

const todoSlice = createSlice({
  name: 'todoItems',
  initialState,
  reducers: {
    addTodo: {
      // add new todo to current todos
      reducer: (state, action: PayloadAction<TodoModel>) => {
        state.push(action.payload);
      },
      prepare: (todoDescription: string) => ({
        payload: {
          todoId: uuid.v4(),
          todoDescription,
        } as TodoModel,
      }),
    },
    // update the completed status of the todo
    setCompletedStatus(
      state,
      action: PayloadAction<{isCompleted: boolean; todoId: string}>,
    ) {
      const index = state.findIndex(
        (todo: TodoModel) => todo.todoId === action.payload.todoId,
      );
      state[index].isCompleted = action.payload.isCompleted;
    },
    // delete todo from existing todo list
    deleteTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex(
        (todo: TodoModel) => todo.todoId === action.payload,
      );
      state.splice(index, 1);
    },
  },
});

export const {addTodo, setCompletedStatus, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
