import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


type Props = {
    title: string,
    content: string,
    link: string,
    url: string,
    onClose: () => void,
    showModal: boolean
}

export default function Modal({title, content, link, url, onClose, showModal}: Props) {
  return (
    <>
      <AlertDialog open={showModal}>
        <AlertDialogContent className='flex flex-col text-center sm:text-left'>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg">{title}</AlertDialogTitle>
            <AlertDialogDescription className="text-md">
              {content}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <p className="cursor-pointer text-white text-sm pt-3">
            <Link
              className="bg-slate-600/80 py-1 px-3 rounded-full"
              href={url}
              target="_blank"
            >
              {link}
            </Link>
          </p>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => onClose()}>
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}