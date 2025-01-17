import { Card } from '@/components/ui/card'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { DotIcon, MoreVertical } from "lucide-react"  // Added MoreVertical icon
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const ProjectCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="p-5 w-full lg:max-w-3xl ">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1 onClick={() => navigate(`/project/3`)} className="cursor-pointer font-bold text-lg">
                Create Ecommrece project
              </h1>
              <DotIcon />
              <p className="text-sm text-gray-400">fullstack</p>
            </div>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant='ghost' size='icon' className='rounded-full' >
                    <MoreVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid aliquam laboriosam officia iste, veritatis hic recusandae numquam expedita atque, molestiae fuga illum totam eveniet accusamus non laborum ipsam distinctio.</p>
        </div>
        <div className='flex flex-wrap gap-2 items-center'>
        {[1,1,1,1].map((item) => <Badge key={item} variant='outline'>{"Frontend"}</Badge>)}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard