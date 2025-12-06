"use client";

import React from "react";

interface Project {
  id: number;
  name: string;
  category: string;
  year: number;
  location: string;
  investor: string;
  functionUse: string;
  scale: string;
  designYear: number;
  work: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-gray-300 shadow rounded p-6 w-full max-w-lg relative overflow-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Danh mục:</strong> {project.category}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Năm dự án:</strong> {project.year}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Địa điểm xây dựng:</strong> {project.location}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Chủ đầu tư:</strong> {project.investor}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Chức năng sử dụng:</strong> {project.functionUse}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Quy mô công trình:</strong> {project.scale}
        </p>
        <p className="text-gray-600 mb-3">
          <strong>Năm thiết kế:</strong> {project.designYear}
        </p>
        <div>
          <strong>Công việc:</strong>
          <ul className="list-disc list-inside mt-1">
            {project.work.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
