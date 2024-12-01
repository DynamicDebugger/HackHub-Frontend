import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, PersonStandingIcon, UserIcon } from "lucide-react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

const IssueCard = () => {
    
  const navigate = useNavigate();
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle className="cursor-pointer" onClick={() => navigate(`/project/3/issue/10`)}>Create NavBar</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
            <p>FBP - {1}</p>
            <DropdownMenu className="w-[30rem] border border-red-400">
                <DropdownMenuTrigger>
                    <Button size="icon" className="rounded-full bg-gray-900 hover:text-black text-white"> 
                        <Avatar>
                            <AvatarFallback>
                                <UserIcon/>
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <UserList/>
                </DropdownMenuContent>
            </DropdownMenu>
            
        </div>
      </CardContent>
    </Card>
  );
}

export default IssueCard