import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from 'next/link';

type Props = {
    title: string,
    content: string,
    link?: string,
    url: string
}

export default function LinkCard({title, content, url}: Props) {
  return (
    <Link href={url} target='_blank'>
      <Alert className="flex flex-col gap-3 cursor-pointer w-full md:w-[300px]">
        <AlertTitle className="text-lg">{title}</AlertTitle>
        <AlertDescription>{content}</AlertDescription>
      </Alert>
    </Link>
  );
}