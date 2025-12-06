"use client";

import { useState } from "react";
import Header from "../components/Header";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";
import FilterForm from "../components/FilterForm";

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
  images: string[];
}

// Dữ liệu dự án
const projects: Project[] = [
  {
    id: 1,
    name: "Dự án Alpha",
    category: "Xây dựng",
    year: 2024,
    location: "Bắc Giang",
    investor: "Vingroup",
    functionUse: "Tòa nhà hỗn hợp TTTM, Chung cư cao tầng",
    scale: "76.589m2",
    designYear: 2021,
    work: [
      "Kiến trúc: Thiết kế phương án kiến trúc, TKCS, Thiết kế BVTC",
      "Cảnh quan nội khu cao tầng + tầng mái: Thiết kế phương án cảnh quan, Thiết kế BVTC",
    ],
    images: [
      "https://wallpaperaccess.com/full/11782.jpg",
      "https://wallpaperaccess.com/full/11754.jpg",
      "https://wallpaperaccess.com/full/11740.jpg",
    ],
  },
  {
    id: 2,
    name: "Dự án Beta",
    category: "Công nghệ",
    year: 2023,
    location: "Hà Nội",
    investor: "FPT",
    functionUse: "Trung tâm dữ liệu",
    scale: "12.000m2",
    designYear: 2020,
    work: ["Thiết kế kiến trúc", "Thiết kế kết cấu", "Thiết kế MEP"],
    images: [
      "https://wallpaperaccess.com/full/11740.jpg",
      "https://wallpaperaccess.com/full/11782.jpg",
      "https://wallpaperaccess.com/full/11754.jpg",
    ],
  },
  {
    id: 3,
    name: "Dự án Alpha",
    category: "Xây dựng",
    year: 2024,
    location: "Bắc Giang",
    investor: "Vingroup",
    functionUse: "Tòa nhà hỗn hợp TTTM, Chung cư cao tầng",
    scale: "76.589m2",
    designYear: 2021,
    work: [
      "Kiến trúc: Thiết kế phương án kiến trúc, TKCS, Thiết kế BVTC",
      "Cảnh quan nội khu cao tầng + tầng mái: Thiết kế phương án cảnh quan, Thiết kế BVTC",
    ],
    images: [
      "https://wallpaperaccess.com/full/11782.jpg",
      "https://wallpaperaccess.com/full/11754.jpg",
      "https://wallpaperaccess.com/full/11740.jpg",
    ],
  },
  {
    id: 4,
    name: "Dự án Beta",
    category: "Công nghệ",
    year: 2023,
    location: "Hà Nội",
    investor: "FPT",
    functionUse: "Trung tâm dữ liệu",
    scale: "12.000m2",
    designYear: 2020,
    work: ["Thiết kế kiến trúc", "Thiết kế kết cấu", "Thiết kế MEP"],
    images: [
      "https://wallpaperaccess.com/full/11740.jpg",
      "https://wallpaperaccess.com/full/11782.jpg",
      "https://wallpaperaccess.com/full/11754.jpg",
    ],
  },
  {
    id: 5,
    name: "Dự án Alpha",
    category: "Xây dựng",
    year: 2024,
    location: "Bắc Giang",
    investor: "Vingroup",
    functionUse: "Tòa nhà hỗn hợp TTTM, Chung cư cao tầng",
    scale: "76.589m2",
    designYear: 2021,
    work: [
      "Kiến trúc: Thiết kế phương án kiến trúc, TKCS, Thiết kế BVTC",
      "Cảnh quan nội khu cao tầng + tầng mái: Thiết kế phương án cảnh quan, Thiết kế BVTC",
    ],
    images: [
      "https://wallpaperaccess.com/full/11782.jpg",
      "https://wallpaperaccess.com/full/11754.jpg",
      "https://wallpaperaccess.com/full/11740.jpg",
    ],
  },
  {
    id: 6,
    name: "Dự án Beta",
    category: "Công nghệ",
    year: 2023,
    location: "Hà Nội",
    investor: "FPT",
    functionUse: "Trung tâm dữ liệu",
    scale: "12.000m2",
    designYear: 2020,
    work: ["Thiết kế kiến trúc", "Thiết kế kết cấu", "Thiết kế MEP"],
    images: [
      "https://wallpaperaccess.com/full/11740.jpg",
      "https://wallpaperaccess.com/full/11782.jpg",
      "https://wallpaperaccess.com/full/11754.jpg",
    ],
  },
];

const categories = ["Xây dựng", "Thiết kế", "Nội thất"];
const years = [2024, 2023, 2022, 2021];

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImages, setCurrentImages] = useState<Record<number, number>>(
    () => {
      const initial: Record<number, number> = {};
      projects.forEach((p) => (initial[p.id] = 0));
      return initial;
    }
  );

  // Filter state
  const [filterResult, setFilterResult] = useState({
    name: "",
    category: "",
    year: null as number | null,
  });

  // Hàm cập nhật filter
  const handleFilter = (filter: {
    name: string;
    category: string;
    year: number | null;
  }) => {
    setFilterResult(filter);
  };

  // Filter dữ liệu dựa trên filterResult
  const filteredProjects = projects.filter((project) => {
    const matchesName = filterResult.name
      ? project.name.toLowerCase().includes(filterResult.name.toLowerCase())
      : true;
    const matchesCategory = filterResult.category
      ? project.category === filterResult.category
      : true;
    const matchesYear = filterResult.year
      ? project.year === filterResult.year
      : true;

    return matchesName && matchesCategory && matchesYear;
  });

  return (
    <div>
      {/* Header + Filter */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
        <FilterForm
          categories={categories}
          years={years}
          onFilter={handleFilter}
        />
      </div>

      {/* Project Grid */}
      <div className="pt-[200px] md:pt-40 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            currentImage={currentImages[project.id]}
            onClick={() => setSelectedProject(project)}
            onPrev={() =>
              setCurrentImages((prev) => ({
                ...prev,
                [project.id]:
                  (prev[project.id] - 1 + project.images.length) %
                  project.images.length,
              }))
            }
            onNext={() =>
              setCurrentImages((prev) => ({
                ...prev,
                [project.id]: (prev[project.id] + 1) % project.images.length,
              }))
            }
          />
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-gray-500 mt-10">
            Không có dự án nào phù hợp.
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
