import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
type Props = {
 name?: string;
 message?: string;
 email?: string;
 feedback?: string;
};
export function CardSmall({ name, message, email, feedback }: Props) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {email || ""}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {message || feedback || "No message provided"}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}
