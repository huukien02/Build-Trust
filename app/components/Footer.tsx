import {
  Facebook,
  Instagram,
  LinkedIn,
  Email,
  Phone,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-12">
        {/* Thông tin công ty */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Build Trust</h3>
          <p className="text-gray-600 mb-2">
            Cam kết mang đến công trình chất lượng, hiện đại và bền vững.
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone fontSize="small" />
            0123 456 789
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Email fontSize="small" />
            contact@abc.com
          </p>
        </div>

        {/* Liên kết nhanh */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            {["Về chúng tôi", "Tin tức & Sự kiện", "Tuyển dụng", "Liên hệ"].map(
              (item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kết nối</h3>
          <div className="flex items-center gap-4 mb-4">
            {[Facebook, Instagram, LinkedIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-blue-500 transition-colors"
              >
                <Icon fontSize="large" />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Build Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
