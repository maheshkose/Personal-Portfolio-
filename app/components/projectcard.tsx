import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { project } from "@/lib/Projects"

export function CardImage({project}: {project: project}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 dark:bg-gray-500 dark:text-gray-50">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
      <img
        src={project.imgUrl}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-100  dark:brightness-90"
      />
      
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="dark:text-gray-50">
         {project.description}
        </CardDescription>
        <CardDescription>
                
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {project.techStack?.map((tech,i)=>
                <Badge key={i} variant="outline" className="mx-1 dark:text-gray-50">{tech}</Badge>
              )}
      </CardContent>
      <CardContent>
        {project.details?.map((detail,i)=>
                <p key={i} className="text-sm text-gray-500 dark:text-gray-50 my-2">{detail}</p>
              )}
      </CardContent>
     
      <CardFooter className="w-full flex justify-between items-center gap-4">
        <Button className=""><a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          Live
        </a></Button>
        <Button className=""><a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a></Button>
      </CardFooter>
    </Card>
  )
}
