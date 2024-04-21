import React from 'react'
import LinkCard from './LinkCard';
import { resources } from './data';
import Link from 'next/link';
import CardInfo from './CardInfo';

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
          <span className='underline cursor-pointer'>
            <Link
              href="https://twitter.com/CodingGimmic"
              target="_blank"
            >@codinggimmic</Link>
          </span>
        </p>
      </div>
      <CardInfo />
    </div>
  );
}