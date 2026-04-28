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
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **State Management:** Zustand
- **Data Fetching:** Axios, `@tanstack/react-query`
- **Routing:** React Router v7
- **UI & Icons:** `lucide-react`
- **Formatting:** Prettier, ESLint
- **Git Hooks:** Husky, lint-staged

## Hướng dẫn cài đặt cho lập trình viên mới (Cloning)

Khi bạn clone dự án này về hoặc chuyển sang môi trường mới, chỉ cần chạy lệnh cài đặt duy nhất:

```bash
npm install
```

**Lưu ý quan trọng về Git Hooks (Husky):**
Dự án đã được tích hợp bộ lọc trước khi commit (pre-commit hook) bằng Husky và lint-staged. Mỗi khi một thành viên gõ lệnh `git commit`, hệ thống sẽ tự động chạy ESLint và Prettier để sửa lỗi và làm đẹp code.
Lệnh `npm install` ở trên sẽ tự động kích hoạt script `"prepare": "husky"` trong `package.json`, qua đó tự động cài đặt các Git Hooks vào máy của lập trình viên mới mà không cần bất kỳ thao tác cấu hình thủ công nào. Code rác sẽ bị chặn lại và không thể bị đẩy lên Git.

**Lưu ý khi đổi kho lưu trữ (Change Git Remote):**
Nếu bạn muốn dùng source này cho một dự án hoàn toàn khác và cần trỏ sang một Github Repository mới, bạn chỉ cần gõ lệnh:

```bash
git remote set-url origin <URL_CỦA_REPO_MỚI>
```

Toàn bộ code và cấu hình Husky (Git hooks) sẽ **giữ nguyên và tiếp tục hoạt động bình thường** vì cấu hình đã nằm sẵn trong thư mục cục bộ của bạn.
