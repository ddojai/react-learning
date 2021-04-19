import { createAction } from 'typesafe-actions';
import { Todo } from './types';

// 리듀서에서 사용 할 수 있도록 타입도 내보내줍니다.
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: nextId++,
  text: text,
}))<Todo>();
// payload가 그대로 들어가는 액션생성함수는 정말 간단합니다.
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
