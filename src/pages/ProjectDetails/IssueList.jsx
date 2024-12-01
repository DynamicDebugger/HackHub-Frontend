import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CreateIssueForm from "./CreateIssueForm";
import { ScrollArea } from "@/components/ui/scroll-area";

const IssueList = ({ title, status, issues = [] }) => {
  return (
    <Dialog>
      <Card className="w-full min-h-[500px] flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">
              {title}
              <span className="ml-2 text-muted-foreground text-sm font-normal">
                ({issues.length || 4})
              </span>
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-3">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <IssueCard 
                  key={item}
                  id={item}
                  title={`Issue ${item}`}
                  status={status}
                />
              ))}
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="pt-0">
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New Issue
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent>
        <DialogHeader className="font-semibold">
          Create New Issue
        </DialogHeader>
        <CreateIssueForm status={status} />
      </DialogContent>
    </Dialog>
  );
}

export default IssueList;