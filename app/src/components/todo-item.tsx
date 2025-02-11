import { Todo } from "@/lib/types"
import { useTodoStore } from "@/lib/store"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"

interface TodoItemProps {
    todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
    const { toggleTodo, deleteTodo } = useTodoStore()

    return (
        <li className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
                <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                />
                <span
                    className={
                        todo.completed ? "line-through text-muted-foreground" : ""
                    }
                >
          {todo.title}
        </span>
            </div>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
            >
                <Trash className="h-4 w-4 text-destructive" />
                <span className="sr-only">Delete</span>
            </Button>
        </li>
    )
}