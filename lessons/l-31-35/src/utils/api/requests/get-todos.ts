import {API} from "../instance.ts";
import type {TodoType} from "../../../types/todo.ts";

export async function getTodos(): Promise<TodoType[]> {
	const response = await API.get('/todos');
	return response.data;
}