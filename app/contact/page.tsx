"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn! Chúng tôi đã nhận được thông tin.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="pt-[120px] pb-20 px-4 flex justify-center">
        <motion.div
          className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-8 space-y-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Thông tin liên hệ */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Liên hệ với Build Trust
            </h1>
            <p className="text-gray-600">
              <strong>Công ty:</strong> Công ty Cổ phần Phát triển Xây dựng và
              Kiến trúc Build Trust
            </p>
            <p className="text-gray-600">
              <strong>Địa chỉ:</strong> Số 9A, Ngõ Phan Huy Chú, Phố Phan Huy
              Chú, Phường Cửa Nam, Tp Hà Nội
            </p>
            <p className="text-gray-600">
              <strong>Văn phòng giao dịch:</strong> Tầng 1, tòa nhà Richy, số 5
              phố Nguyễn Xuân Nham, Phường Yên Hòa, TP Hà Nội
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> goome@goome.vn
            </p>
            <p className="text-gray-600">
              <strong>Website:</strong>{" "}
              <a href="#" className="text-blue-600 hover:underline">
                buildtrust.com.vn
              </a>
            </p>
            <p className="text-gray-600">
              <strong>Facebook:</strong>{" "}
              <a href="#" className="text-blue-600 hover:underline">
                facebook.com/buildtrust
              </a>
            </p>
            <p className="text-gray-600">
              <strong>Điện thoại:</strong> 0983239161 - 0904638438
            </p>
          </div>

          {/* Form liên hệ */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tên"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Thư điện tử"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nội dung"
              rows={6}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Gửi
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
