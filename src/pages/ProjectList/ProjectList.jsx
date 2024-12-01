import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, Search } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import ProjectCard from "../Project/ProjectCard";

export const tags = [
  "all",
  "react",
  "next",
  "tailwind",
  "typescript",
  "node",
  "express",
  "mongodb",
  "postgresql",
  "mysql",
  "prisma",
  "graphql",
  "apollo",
  "socketio",
  "jwt",
  "docker",
  "kubernetes",
  "aws",
  "azure",
  "gcp",
  "firebase",
  "supabase",
  "vercel",
  "netlify",
  "heroku"
];
const ProjectList = () => {

  const [keyword, setKeyword] = useState("");
  const handleFilterChange = (section, value) => {
    console.log("Value:" ,section, value);
  };
  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
      <section className="filterSection">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl -tracking-wider">filters</p>
            <Button variant="ghost" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="mt-5">
            <ScrollArea className="space-y-7 h-[70vh]">
              <div>
                <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="flex flex-col space-y-3"
                    defaultValue="all"
                    onValueChange={(selectedValue) => {
                      handleFilterChange("Category", selectedValue);
                    }}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 pt-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor="r1">All</Label>
                      </div>
                      <div className="flex items-center space-x-2 pt-2">
                        <RadioGroupItem value="fullstack" id="r2" />
                        <Label htmlFor="r2">Fullstack</Label>
                      </div>
                      <div className="flex items-center space-x-2 pt-2">
                        <RadioGroupItem value="frontend" id="r3" />
                        <Label htmlFor="r3">Frontend</Label>
                      </div>
                      <div className="flex items-center space-x-2 pt-2">
                        <RadioGroupItem value="backend" id="r4" />
                        <Label htmlFor="r4">Backend</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-9">
                <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-3 pt-5"
                    defaultValue="all"
                    onValueChange={(selectedValue) => {
                      handleFilterChange("tag", selectedValue);
                    }}
                  >
                    {tags.map((item, index) => (
                      <div
                        key={`tag-${item}-${index}`}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={item}
                          id={`tag-${item}-${index}`}
                        />
                        <Label htmlFor={`tag-${item}-${index}`}>{item}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
      <section className="projectListSection w-full lg:w-[48rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative p-0 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              value={keyword}
              onChange={handleSearchChange}
              placeholder="Search project"
              className="pl-9"
            />
          </div>
        </div>
        <div>
          <div className="space-y-5 min-h-[74vh]">
            {keyword
              ? [1, 1, 1].map((item) => <ProjectCard key={item} />)
              : [1, 1, 1, 1].map((item) => <ProjectCard key={item} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

ProjectList.propTypes = {};

export default ProjectList;
