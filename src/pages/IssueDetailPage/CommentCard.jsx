import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"

const CommentCard = () => {
  return (
    <div className="flex justify-between">
        <div className="flex items-center gap-4">
            <Avatar>
                <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <p>Code with bala</p>
                <p className="text-gray-300">How work is going on?</p>
            </div>
            <Button size="icon" variant="ghost" className="rounded-full"><TrashIcon/></Button>
        </div>
    </div>
  )
}

export default CommentCard