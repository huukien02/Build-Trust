"use client";

import React from "react";

interface Project {
  id: number;
  name: string;
  category: string;
  year: number;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
  currentImage: number;
  onClick: () => void;
  onPrev: () => void; // nút prev
  onNext: () => void; // nút next
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  currentImage,
  onClick,
  onPrev,
  onNext,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative h-[400px] rounded overflow-hidden cursor-pointer shadow-md group"
    >
      {/* Slider container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.name} ${index}`}
              className="w-full h-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Nút Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // tránh đóng modal khi click
          onPrev();
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#333333] cursor-pointer bg-opacity-50 p-2 rounded-full hover:bg-opacity-50"
      >
        &#8249;
      </button>

      {/* Nút Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#333333] cursor-pointer bg-opacity-50 p-2 rounded-full hover:bg-opacity-50"
      >
        &#8250;
      </button>

      {/* Overlay chữ */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white ">
        <h3 className="font-bold text-lg">{project.name}</h3>
        <p className="text-sm">
          {project.category} - {project.year}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
