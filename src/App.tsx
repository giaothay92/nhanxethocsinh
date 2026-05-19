/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Chrome, 
  CheckCircle2, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Download, 
  Star, 
  MessageCircle, 
  ChevronDown, 
  Mail, 
  Phone, 
  Facebook,
  GraduationCap,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Types
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const ZALO_LINK = "https://zalo.me/0336660253";
  const LINK_THCS_PRO = "https://tramsac.online/GIAI%20NEN%20TOI%20CSDL.zip";
  const LINK_VNEDU_PRO = "https://tramsac.online/GIAI%20NEN%20TOI.rar";

  const products = [
    {
      id: "csdl",
      name: "Trợ lý Nhập Nhận xét THCS Pro",
      tagline: "Chuyên dụng cho hệ thống CSDL Ngành",
      link: LINK_THCS_PRO,
      color: "from-[#8B4513] via-[#A52A2A] to-[#DAA520]", // Red-Brown-Yellow tones
      accent: "#DAA520",
      features: [
        "Tự động đọc điểm & điền MÃ + LỜI NHẬN XÉT theo chuẩn",
        "Hỗ trợ THCS (TT22) & Tiểu học (TT27, NLPC)",
        "Cá nhân hóa ngân hàng lời nhận xét riêng từng môn",
        "Chép/dán hàng loạt từ Word/Excel chỉ trong 1 giây",
        "Bảo mật Local 100% - Dữ liệu chỉ nằm trên máy bạn"
      ]
    },
    {
      id: "vnedu",
      name: "Trợ lý Vnedu siêu tốc Pro",
      tagline: "Tối ưu hóa tuyệt đối cho hệ thống Vnedu",
      link: LINK_VNEDU_PRO,
      color: "from-[#0068ff] via-[#00a2ff] to-[#e0f2ff]", // Blue-White tones
      accent: "#0068ff",
      features: [
        "Công nghệ Randomize: Ngẫu nhiên hóa lời phê tự nhiên",
        "Nhận diện thông minh Điểm số & Đánh giá bằng chữ",
        "Hỗ trợ đủ cột Giữa kỳ, Cuối kỳ & Cả năm (Học bạ)",
        "Đầy đủ cho mọi cấp học: TH, THCS, THPT",
        "Giao diện cài đặt trực quan, thân thiện 100%"
      ]
    }
  ];

  const installationSteps = [
    { title: "Bước 1: Chọn phiên bản", desc: "Chọn đúng phiên bản dành cho CSDL ngành hoặc Vnedu phù hợp với hệ thống bạn đang dùng.", icon: <Star className="w-5 h-5" /> },
    { title: "Bước 2: Cài đặt từ Store", desc: "Nhấn nút cài đặt để chuyển đến Chrome Web Store và nhấn 'Thêm vào Chrome'.", icon: <Chrome className="w-5 h-5" /> },
    { title: "Bước 3: Đăng nhập & Mở", desc: "Nhấn vào biểu tượng mảnh ghép trên trình duyệt, ghim EduAssist và mở giao diện.", icon: <Zap className="w-5 h-5" /> },
    { title: "Bước 4: Thiết lập mẫu", desc: "Tùy chỉnh hoặc nạp dữ liệu mẫu nhận xét từ Word/Excel vào hệ thống.", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Bước 5: Nhập liệu", desc: "Vào trang nhập điểm/nhận xét, nhấn nút hỗ trợ để hệ thống tự động làm việc.", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const features: Feature[] = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Tự động hóa 100%",
      description: "Hệ thống tự động đọc dữ liệu điểm số và khớp lời nhận xét tương ứng một cách chính xác."
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Lời phê ngẫu nhiên",
      description: "Tránh tình trạng trùng lặp lời phê nhờ thuật toán chọn lọc ngẫu nhiên thông minh."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: "An toàn dữ liệu",
      description: "Dữ liệu được lưu trữ local trên máy tính, không gửi ra ngoài, bảo mật thông tin học sinh tuyệt đối."
    },
    {
      icon: <Download className="w-6 h-6 text-blue-600" />,
      title: "Nhập liệu từ Excel",
      description: "Hỗ trợ copy/paste hàng loạt từ Excel/Word vào ngân hàng dữ liệu chỉ trong tích tắc."
    }
  ];

  const pricing: PricingPlan[] = [
    {
      name: "Gói Dùng Thử",
      price: "Miễn phí",
      features: [
        "Hỗ trợ đầy đủ tính năng chính",
        "Kho mẫu nhận xét mặc định",
        "Giới hạn số lượt nhập liệu",
        "Cập nhật định kỳ"
      ]
    },
    {
      name: "Gói Pro (Cá nhân)",
      price: "100.000đ/năm",
      recommended: true,
      features: [
        "Không giới hạn lượt nhập liệu",
        "Tùy chỉnh kho mẫu cá nhân hóa",
        "Hỗ trợ ưu tiên qua Zalo 24/7",
        "Kích hoạt 1 máy tính sử dụng",
        "Mở khóa công nghệ Randomize"
      ]
    },
    {
      name: "Gói Nhà Trường",
      price: "Liên hệ",
      features: [
        "Chiết khấu cao cho nhóm giáo viên",
        "Quản lý tập trung kho mẫu",
        "Hỗ trợ cài đặt từ xa qua UltraView",
        "Cập nhật theo yêu cầu riêng",
        "Xuất báo cáo tổng hợp"
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Cô Nguyễn Thu Hà",
      role: "Giáo viên Tiểu học - Hà Nội",
      content: "Tiện ích này như một 'cứu cánh' mỗi mùa tổng kết. Ngày xưa tôi mất cả tuần để nhập nhận xét, nay chỉ mất chưa đầy một buổi.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ha"
    },
    {
      name: "Thầy Trần Văn Minh",
      role: "Giáo viên THCS - Đà Nẵng",
      content: "Rất ấn tượng với khả năng đồng bộ mẫu nhận xét cá nhân. Tôi có thể chuẩn bị sẵn và áp dụng cực kỳ nhanh chóng trên VNedu.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh"
    },
    {
      name: "Cô Lê Minh Anh",
      role: "Giáo viên THPT - TP.HCM",
      content: "Tiện ích hoạt động mượt mà ngay cả khi hệ thống VNedu bị nghẽn mạng. Rất đáng đồng tiền bát gạo!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anh"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Tiện ích này có an toàn cho dữ liệu học sinh không?",
      answer: "Hoàn toàn an toàn. EduAssist hoạt động trực tiếp trên trình duyệt của bạn và không lưu trữ bất kỳ thông tin cá nhân nào của học sinh lên máy chủ của chúng tôi."
    },
    {
      question: "Tôi có thể sử dụng trên nhiều máy tính không?",
      answer: "Vâng, bạn có thể đăng nhập tài khoản EduAssist trên bất kỳ máy tính nào có cài đặt trình duyệt Chrome hoặc Edge để sử dụng."
    },
    {
      question: "Làm thế nào để cập nhật kho mẫu nhận xét mới?",
      answer: "Hệ thống sẽ tự động cập nhật các mẫu nhận xét mới nhất theo thông tư của Bộ Giáo dục. Bạn không cần thực hiện thêm bất kỳ thao tác nào."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">EduAssist</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tính năng</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Bảng giá</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Hỏi đáp</a>
              <a 
                href={ZALO_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Tải xuống ngay
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-slate-200 py-4 px-4 flex flex-col gap-4 shadow-lg"
            >
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Tính năng</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Bảng giá</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Hỏi đáp</a>
              <a 
                href={ZALO_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Tải về miễn phí
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-xs font-black mb-8 uppercase tracking-[0.2em]">
              <Zap className="w-4 h-4 fill-current" />
              Tiết kiệm 90% thời gian nhập học bạ
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              Trợ Lý Nhận Xét <br />
              <span className="text-blue-600">Thế Hệ Mới Pro</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Giải pháp tự động hóa 100% dành cho giáo viên Việt Nam. Chuyên biệt hóa cho 2 hệ thống lớn nhất hiện nay.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <a href="#products" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
                Khám phá phiên bản Pro
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setShowGuide(true)}
                className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-3"
              >
                Hướng dẫn sử dụng
              </button>
            </div>
          </motion.div>

          {/* Abstract background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-[120px]" />
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="products" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Chọn Phiên Bản Phù Hợp</h2>
            <p className="text-slate-500 text-lg">Mỗi phiên bản được tối ưu hóa riêng cho từng hệ thống kỹ thuật.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`h-full bg-white rounded-[3rem] p-1 shadow-2xl overflow-hidden transition-transform hover:-translate-y-2`}>
                  <div className={`h-full bg-gradient-to-br ${product.color} rounded-[2.8rem] p-8 md:p-12 text-white relative flex flex-col`}>
                    
                    {/* Floating icon */}
                    <div className="absolute top-10 right-10 opacity-10 scale-[4]">
                      <Chrome />
                    </div>

                    <div className="relative z-10 flex-1">
                      <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Phiên bản {product.id.toUpperCase()}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{product.name}</h3>
                      <p className="text-white/80 font-medium mb-10 text-lg">{product.tagline}</p>

                      <ul className="space-y-4 mb-12">
                        {product.features.map((f, i) => (
                          <li key={i} className="flex gap-4 items-start text-sm leading-relaxed">
                            <div className="mt-1 p-1 bg-white/20 rounded-lg">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-auto">
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all text-center shadow-xl flex items-center justify-center gap-3"
                      >
                        <Download className="w-5 h-5" />
                        Tải về ngay
                      </a>
                      <a 
                        href={ZALO_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-5 bg-black/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/10 transition-all text-center flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Nhận hỗ trợ
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Logos */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Tương thích hoàn hảo với</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-60">
            {["VNedu", "SMAS", "CSDL Ngành", "EduNet"].map(name => (
              <span key={name} className="text-2xl font-black italic text-slate-900">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">Tại sao nên chọn EduAssist?</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all border border-transparent hover:border-slate-100 group"
              >
                <div className="mb-6 p-3 bg-white w-fit rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Quy trình đơn giản, <br />hiệu quả bất ngờ</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Cài đặt tiện ích", desc: "Tải EduAssist từ Chrome Web Store và đăng nhập tài khoản." },
                  { step: "02", title: "Truy cập hệ thống", desc: "Mở VNedu, SMAS hoặc CSDL ngành vào phần nhận xét học sinh." },
                  { step: "03", title: "Nhấn nút Tự động", desc: "Chọn mẫu nhận xét và xem phép màu xảy ra trong giây lát." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-black text-blue-500 opacity-50">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] p-1 shadow-2xl">
                <div className="bg-slate-900 rounded-[1.8rem] overflow-hidden">
                  <video 
                    className="w-full h-full object-cover" 
                    controls
                    autoPlay 
                    muted 
                    loop 
                    src="https://tramsac.online/cai_dat.mp4"
                    poster="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2" />
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Chia sẻ từ đồng nghiệp</h2>
            <p className="text-slate-600">Những người đã thay đổi cách làm việc nhờ EduAssist</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-8">\"{t.content}\"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full bg-slate-100" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Chọn gói dịch vụ phù hợp</h2>
            <div className="inline-flex p-1 bg-slate-100 rounded-xl mb-8">
              <button className="px-6 py-2 bg-white rounded-lg shadow-sm text-sm font-bold text-blue-600">Thanh toán theo năm</button>
              <button className="px-6 py-2 text-sm font-bold text-slate-500">Thanh toán 1 lần</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div 
                key={i}
                className={`p-8 rounded-3xl border-2 transition-all relative ${
                  plan.recommended 
                    ? "border-blue-600 shadow-2xl scale-105 z-10 bg-white" 
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Phổ biến nhất</span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  {plan.price !== "Liên hệ" && plan.price !== "Miễn phí" && <span className="text-slate-400 text-sm font-medium"> /năm</span>}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 rounded-2xl font-bold transition-all text-center flex items-center justify-center ${
                    plan.recommended 
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200" 
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {plan.price === "Liên hệ" ? "Liên hệ nhận giá" : "Bắt đầu ngay"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Câu hỏi thường gặp</h2>
            <p className="text-slate-600">Chúng tôi giải đáp những thắc mắc phổ biến nhất của giáo viên</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-900">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-400/20">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Sẵn sàng để tiết kiệm <br />thời gian ngay hôm nay?</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
                Tham gia cùng hàng nghìn đồng nghiệp khác và tận hưởng kỳ nghỉ lễ trọn vẹn mà không lo lắng về hồ sơ sổ sách.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <Download className="w-6 h-6" />
                  Tải về bản full
                </a>
                <a 
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="px-10 py-5 bg-blue-700 text-white font-black rounded-2xl hover:bg-blue-800 transition-all border border-blue-500/30 flex items-center justify-center gap-3 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat tư vấn (Zalo)
                </a>
              </div>
            </div>
            
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -ml-32 -mb-32" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">EduAssist</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Giải pháp công nghệ giáo dục giúp tối ưu hóa công việc hành chính cho mỗi giáo viên Việt Nam.
              </p>
            </div>
            
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">Liên kết</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Kho mẫu nhận xét</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Điều khoản dịch vụ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">Hỗ trợ</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-600">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <a href={ZALO_LINK} target="_blank" rel="noreferrer" className="hover:text-blue-600">033.666.0253 (Zalo)</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  hotro@eduassist.vn
                </li>
                <li className="flex items-center gap-3">
                  <Facebook className="w-4 h-4 text-blue-500" />
                  Cộng đồng EduAssist
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">Bản tin</h4>
              <p className="text-xs text-slate-500 mb-4">Nhận thông báo về các mẫu nhận xét mới nhất.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email của bạn" className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-400 transition-colors" />
                <button className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
            <p>&copy; 2026 EduAssist Team. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-600 cursor-pointer">VN</span>
              <span className="hover:text-slate-600 cursor-pointer">EN</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Installation Guide Modal */}
      <AnimatePresence>
        {showGuide && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGuide(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-14 bg-white max-h-[90vh] overflow-y-auto">
                <button 
                  onClick={() => setShowGuide(false)}
                  className="absolute top-8 right-8 p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-12 border-b border-slate-100 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Hướng dẫn kỹ thuật</span>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 leading-tight">Cài đặt EduAssist chỉ với 5 bước</h3>
                  <p className="text-slate-500 mt-4 text-lg max-w-2xl">Làm theo hướng dẫn dưới đây hoặc xem video bên dưới để tích hợp trợ lý nhận xét vào trình duyệt của bạn.</p>
                </div>

                {/* Video Hướng Dẫn Cài Đặt */}
                <div className="mb-12 p-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-[2rem] shadow-xl">
                  <div className="bg-slate-950 rounded-[1.8rem] overflow-hidden aspect-video relative">
                    <video 
                      className="w-full h-full" 
                      controls
                      src="https://tramsac.online/cai_dat.mp4"
                      poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                    />
                  </div>
                  <div className="p-4 text-center text-sm font-bold text-white">
                    🎥 Video Hướng Dẫn Trực Quan (Xem chi tiết từng thao tác)
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                  {installationSteps.map((step, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-3 text-xl">
                          {step.title}
                          {i === 4 && <span className="bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest">Kích hoạt</span>}
                        </h4>
                        <p className="text-slate-500 text-base leading-relaxed">{step.desc}</p>
                        {i === 0 && (
                          <a 
                            href={ZALO_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 px-8 py-3.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all inline-flex items-center gap-3 shadow-xl shadow-blue-200"
                          >
                            <Download className="w-4 h-4" />
                            Nhận link tải (.zip) qua Zalo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200">
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-2xl mb-2">Bạn cần hỗ trợ cài đặt từ xa?</h4>
                    <p className="text-blue-100 opacity-90">Chúng tôi hỗ trợ cài đặt qua UltraView/TeamView miễn phí 24/7.</p>
                  </div>
                  <a 
                    href={ZALO_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-5 bg-white text-blue-600 font-black rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center gap-3 whitespace-nowrap"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Chat Zalo: 033.666.0253
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Zalo Button */}
      <motion.a
        href={ZALO_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#0068ff] rounded-full shadow-2xl flex items-center justify-center group"
      >
        <div className="absolute inset-0 rounded-full bg-[#0068ff] animate-ping opacity-20" />
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          <p className="text-xs font-bold text-slate-900">Chat với hỗ trợ viên (Zalo)</p>
        </div>
      </motion.a>
    </div>
  );
}
