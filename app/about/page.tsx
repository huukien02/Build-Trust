"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
const values = [
  "Uy tín - Tận Tâm",
  "Khoa học - Sáng Tạo",
  "Đoàn kết - Sẻ chia",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <div className="border-b-2 border-gray-300">
        <Header />
      </div>

      <div className="relative w-full h-[700px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://wallpaperaccess.com/full/6673402.jpg')",
          }}
        ></div>

        {/* Overlay mờ */}
        <div className="absolute inset-0 "></div>

        {/* Nội dung ở dưới trái */}
        <div className="absolute bottom-6 left-6 text-white text-lg md:text-xl font-semibold">
          2020-08-30 11:21:13 <br /> Về chúng tôi
        </div>
      </div>

      <section className="bg-gray-50 text-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16 flex flex-col gap-20">
          {/* GIỚI THIỆU */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              GIỚI THIỆU
            </h2>
            <p>
              Công ty Cổ phần Phát triển Xây dựng và Kiến trúc Goome là một đơn
              vị chuyên về tư vấn, thiết kế với đầy đủ và đồng bộ các bộ môn:
              Quy hoạch-Hạ tầng, Kiến trúc, Kết cấu, MEP, PCCC, Nội thất, Cảnh
              quan, Kinh tế dự toán.
            </p>
            <p>
              Được thành lập từ năm 2017 tại Hà Nội, Goome có sự gắn kết cao
              giữa đội ngũ cán bộ nhiều kinh nghiệm, các chuyên gia đầu ngành
              cùng các KTS, kỹ sư trẻ nhiệt huyết. “Với đam mê, trí tuệ và sự
              tận tâm, Goome luôn nỗ lực sáng tạo những ý tưởng và giải pháp tối
              ưu cho từng dự án.”
            </p>
          </div>

          {/* NĂNG LỰC HOẠT ĐỘNG */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              NĂNG LỰC HOẠT ĐỘNG
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Thiết kế, thẩm tra công trình dân dụng hạng I</li>
              <li>
                Thiết kế, thẩm tra công trình hạ tầng, công nghiệp hạng II
              </li>
              <li>Thiết kế, thẩm tra quy hoạch hạng III</li>
            </ul>
            <p className="mt-2 font-semibold">Thế mạnh:</p>
            <p>
              Thiết kế chung cư, văn phòng, hỗn hợp; bệnh viện, y tế; nhà ở thấp
              tầng, khu đô thị; cảnh quan; nhà công nghiệp. Các dự án tiêu biểu:
              Vinhomes Skypark, Vinhomes Grand Park, Bệnh viện Tâm Anh, Nhà máy
              Vinfast, Vinpearl Nha Trang...
            </p>
          </div>

          <div className="space-y-8 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-4">
              GIÁ TRỊ CỐT LÕI
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white shadow-md rounded-lg cursor-pointer"
                >
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* TẦM NHÌN & SỨ MỆNH */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TẦM NHÌN & SỨ MỆNH
            </h2>
            <p className="font-semibold">TẦM NHÌN:</p>
            <p>Trở thành công ty tư vấn thiết kế xây dựng hàng đầu Việt Nam.</p>
            <p className="font-semibold mt-2">SỨ MỆNH:</p>
            <p>
              Với đam mê, trí tuệ và sự tận tâm, Goome luôn nỗ lực sáng tạo
              những ý tưởng và giải pháp tối ưu cho từng dự án, mang đến không
              gian sống lý tưởng, nâng cao giá trị cuộc sống, vì một thế giới
              tốt đẹp hơn.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
