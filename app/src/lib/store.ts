import { create } from "zustand"
import { Todo } from "@/lib/types"
import { v4 as uuidv4 } from "uuid"

type FilterType = "all" | "active" | "completed"

interface TodoState {
    todos: Todo[]
    filter: FilterType
    addTodo: (title: string) => void
    deleteTodo: (id: string) => void
    toggleTodo: (id: string) => void
    setFilter: (filter: FilterType) => void
    filteredTodos: Todo[]
}

export const useTodoStore = create<TodoState>((set, get) => ({
    todos: [
        { id: uuidv4(), title: "Learn Zustand", completed: true },
        { id: uuidv4(), title: "Build a todo app", completed: false },
    ],
    filter: "all",
    addTodo: (title) =>
        set((state) => ({
            todos: [...state.todos, { id: uuidv4(), title, completed: false }],
        })),
    deleteTodo: (id) =>
        set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
    setFilter: (filter) => set({ filter }),
    filteredTodos: [],
    get filteredTodos() {
        const filter = get().filter
        const todos = get().todos
        switch (filter) {
            case "active":
                return todos.filter((todo) => !todo.completed)
            case "completed":
                return todos.filter((todo) => todo.completed)
            default:
                return todos
        }
    },
}))