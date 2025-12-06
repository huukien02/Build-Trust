"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

const newsList: NewsItem[] = [
  {
    id: 1,
    date: "2024-12-02 08:15:51",
    title: "Mừng khai trương Vincom Sky Park - Bắc Giang",
    description:
      "Goome thiết kế từ giai đoạn Thiết kế ý tưởng, TKCS, TKKT, TK BVTC hạng mục hỗn hợp cao tầng và nhà ở thấp tầng, thiết kế cảnh quan",
    image: "https://wallpaperaccess.com/full/11782.jpg",
  },
  {
    id: 2,
    date: "2024-11-20 10:30:00",
    title: "Dự án Sunshine City Center",
    description:
      "Thiết kế kiến trúc và cảnh quan cho dự án chung cư cao cấp tại Hà Nội",
    image: "https://wallpaperaccess.com/full/11523.jpg",
  },
  {
    id: 3,
    date: "2024-11-10 14:45:12",
    title: "Nhà máy sản xuất thông minh tại Bắc Ninh",
    description:
      "Thiết kế và triển khai hạng mục công nghiệp theo tiêu chuẩn quốc tế",
    image: "https://wallpaperaccess.com/full/11234.jpg",
  },
  {
    id: 4,
    date: "2024-12-02 08:15:51",
    title: "Mừng khai trương Vincom Sky Park - Bắc Giang",
    description:
      "Goome thiết kế từ giai đoạn Thiết kế ý tưởng, TKCS, TKKT, TK BVTC hạng mục hỗn hợp cao tầng và nhà ở thấp tầng, thiết kế cảnh quan",
    image: "https://wallpaperaccess.com/full/11782.jpg",
  },
  {
    id: 5,
    date: "2024-11-20 10:30:00",
    title: "Dự án Sunshine City Center",
    description:
      "Thiết kế kiến trúc và cảnh quan cho dự án chung cư cao cấp tại Hà Nội",
    image: "https://wallpaperaccess.com/full/11523.jpg",
  },
  {
    id: 6,
    date: "2024-11-10 14:45:12",
    title: "Nhà máy sản xuất thông minh tại Bắc Ninh",
    description:
      "Thiết kế và triển khai hạng mục công nghiệp theo tiêu chuẩn quốc tế",
    image: "https://wallpaperaccess.com/full/11234.jpg",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = newsList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header fixed */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Nội dung chính */}
      <div className="flex justify-center pt-[120px] pb-[100px] px-4">
        <div className="w-[1200px] space-y-8">
          {currentItems.map((news, index) => (
            <div
              key={news.id}
              className="flex flex-col md:flex-row rounded-lg shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Nội dung */}
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <div className="text-sm text-gray-400">{news.date}</div>
                <h2 className="text-2xl font-bold mt-2 text-gray-800">
                  {news.title}
                </h2>
                <p className="mt-2 text-gray-600">{news.description}</p>
              </div>

              {/* Ảnh */}
              <div className="md:w-1/3 w-full overflow-hidden">
                <div className="w-full aspect-video relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Phân trang */}
          <div className="flex justify-center space-x-3 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
