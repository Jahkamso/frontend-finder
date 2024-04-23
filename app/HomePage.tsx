import React from 'react'
import LinkCard from './LinkCard';
import { resources } from './data';
import Link from 'next/link';
import CardInfo from './CardInfo';
import Image from 'next/image';
import GithubIcon from '../public/github.png'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div className="flex flex-col gap-20 pt-10 md:pt-0">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-3xl leading-[40px] sm:text-4xl md:text-5xl text-center sm:leading-[50px] md:leading-[65px] font-extrabold">
          Discover resources for <br /> Frontend Developers
        </h1>
        <p className="text-lg sm:text-xl text-center">
          Platforms to help you improve your frontend skills
        </p>
        <p className="bg-muted px-2 rounded-sm">
          made by{" "}
          <span className="underline cursor-pointer">
            <Link href="https://twitter.com/CodingGimmic" target="_blank">
              @codinggimmic
            </Link>
          </span>
        </p>
      </div>
      <CardInfo />
      <div className="flex items-center justify-center">
          <Link
            href="https://github.com/Jahkamso/frontend-finder"
            target="_blank"
          >
        <div className="flex items-center gap-3 bg-muted py-1 px-3 cursor-pointer rounded-full">
          <h3>Source code</h3>
            <Image
              className="w-[30px] h-[30px]"
              src={GithubIcon}
              alt="Github icon"
            />
        </div>
          </Link>
      </div>
    </div>
  );
}