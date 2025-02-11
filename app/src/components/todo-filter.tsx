import { useTodoStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Filter } from "lucide-react"

export function TodoFilter() {
    const { filter, setFilter } = useTodoStore()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    {filter === "all"
                        ? "All"
                        : filter === "active"
                        ? "Active"
                        : "Completed"}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setFilter("all")}>
          All
        </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("active")}>
          Active
        </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("completed")}>
          Completed
        </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}