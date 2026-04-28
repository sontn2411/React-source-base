# Source Base React v18

Dự án này là một base source chuẩn sử dụng **React 18 + Vite**, thiết lập dưới dạng Single Page Application (SPA) hoàn toàn chạy ở phía Client (Không có code chạy Server).

## Cấu trúc thư mục `src`

Dưới đây là ý nghĩa và cách tổ chức thư mục bên trong `src/` nhằm hỗ trợ phát triển dự án dễ bảo trì và mở rộng:

```text
src/
├── assets/         # Chứa tài nguyên tĩnh: hình ảnh, icon, font chữ.
├── components/     # Chứa các UI Component dùng chung trên toàn hệ thống (Button, Input, Modal,...).
├── config/         # Cấu hình dự án (ví dụ: cấu hình biến môi trường, thiết lập thư viện bên thứ 3).
├── constants/      # Các hằng số (constants), biến tĩnh dùng chung toàn dự án để tránh hardcode.
├── hooks/          # Custom React Hooks (vd: useAuth, useDebounce, useWindowSize...).
├── layouts/        # Chứa các component bố cục trang (Header, Footer, Sidebar, MainLayout, AuthLayout).
├── pages/          # Chứa các trang/màn hình của ứng dụng (vd: Home, Login, Dashboard).
├── routes/         # Cấu hình định tuyến (Routing) cho React Router.
├── services/       # Nơi xử lý gọi API, giao tiếp với server (Axios instance, các file định nghĩa gọi API...).
├── store/          # Quản lý State toàn cục bằng thư viện Zustand.
├── styles/         # Chứa các file CSS/SCSS (vd: App.css, index.css, variables...).
├── types/          # Chứa các định nghĩa kiểu dữ liệu TypeScript (Interfaces, Types).
├── utils/          # Các hàm tiện ích dùng chung (format date, format tiền tệ, validation...).
├── App.tsx         # Component gốc của ứng dụng.
└── main.tsx        # Điểm entry của React.
```

## Các thư viện chính

- **Framework/Bundler:** React 18, Vite (phiên bản v8)
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Routing:** React Router DOM v6+
- **Alias Path:** Hỗ trợ alias `@` đại diện cho thư mục `src`.
