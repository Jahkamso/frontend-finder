"use client";

import React, { useState } from "react";
import LinkCard from "./LinkCard";
import { resources } from "./data";
import Modal from "./Modal";

type Props = {};

// type ResourceProps = {
//   title: string;
//   content: string;
//   link: string;
//   url: string;
// };

export default function CardInfo({}: Props) {
  // const [selectedResource, setSelectedResource] =
  //   useState<ResourceProps | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleCardClick = (resource: ResourceProps) => {
  //   setSelectedResource(resource);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setSelectedResource(null);
  //   setIsModalOpen(false);
  // };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {resources.map((data, index) => (
          <div key={index}>
            <LinkCard title={data.title} content={data.content} url={data.url} />
          </div>
        ))}
      </div>
      {/* {isModalOpen && (
        <Modal
          title={selectedResource ? selectedResource.title : ""}
          content={selectedResource ? selectedResource.content : ""}
          link={selectedResource ? selectedResource.link : ""}
          url={selectedResource ? selectedResource.url : ""}
          onClose={handleCloseModal}
          showModal={isModalOpen}
        />
      )} */}
    </div>
  );
}
