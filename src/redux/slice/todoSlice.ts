import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TodoModel} from '../../models/todoModel';
import uuid from 'react-native-uuid';

const initialState = [] as TodoModel[];

const todoSlice = createSlice({
  name: 'todoItems',
  initialState,
  reducers: {
    addTodo: {
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
    setCompletedStatus(
      state,
      action: PayloadAction<{isCompleted: boolean; todoId: string}>,
    ) {
      const index = state.findIndex(
        (todo: TodoModel) => todo.todoId === action.payload.todoId,
      );
      state[index].isCompleted = action.payload.isCompleted;
    },
  },
});

export const {addTodo, setCompletedStatus} = todoSlice.actions;
export default todoSlice.reducer;
