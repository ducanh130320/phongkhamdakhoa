'use client';
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-100 py-12 border-t-4 border-brand-red">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Logo and Info */}
          <div className="md:w-1/2">
            <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
              PHÒNG KHÁM ĐA KHOA TẠO HÌNH PHẪU THUẬT THẨM MỸ TRUE HOPE 👍YOUR TRUTH - OUR HAPPINESS
            </h3>

            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3399ff] mt-0.5 shrink-0" />
                <p>CC2 Nguyễn Hữu Thọ, Bán Đảo Linh Đàm, Hoàng Mai , Hà Nội (Toà Nhà True Hope)</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3399ff] shrink-0" />
                <p>0985.912.711 - 098.160.8901 - 0929.380.888.</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3399ff] shrink-0" />
                <p>cskh.phongkhamnamkhoatruehope@gmail.com</p>
              </div>
              {/* <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#3399ff] shrink-0" />
                <p>quangnam.tmmchealthcare.com</p>
              </div> */}
            </div>
          </div>

          {/* Social Links or Map Placeholder */}
          <div className="md:w-1/2 w-full h-84  bg-gray-200 rounded-xl overflow-hidden shadow-inset border-2 border-white/10 flex items-center justify-center relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.0101075821262!2d105.8274938!3d20.9684791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad9e58eb7b7d%3A0x427e7a6d845702d5!2sTRUE%20HOPE%20SURGERY%20CLINIC%20(Ph%C3%B2ng%20kh%C3%A1m%20%C4%91a%20khoa)!5e1!3m2!1svi!2s!4v1774427192407!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-blue-200/60 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} PHÒNG KHÁM ĐA KHOA TẠO HÌNH PHẪU THUẬT THẨM MỸ TRUE HOPE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}