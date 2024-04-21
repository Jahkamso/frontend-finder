import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
    title: string,
    content: string,
    link?: string
}

export default function LinkCard({title, content, link}: Props) {
  return (
    <Alert className="flex flex-col gap-3 cursor-pointer w-full md:w-[300px]">
      <AlertTitle className='text-lg'>{title}</AlertTitle>
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  );
}