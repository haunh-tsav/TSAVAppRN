/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          primary: '#0466a4',
          primaryLight: '#B3D5E9', // Dùng khi nhấn nút
          primaryDark: '#035283',
          accent: '#FFC107', // Vàng gold/hổ phách
          background: '#F8F9FA', // Nền xám rất nhạt
          card: '#FFFFFF', // Thẻ màu trắng
          text: '#212529', // Chữ đen đậm
          textSecondary: '#6C757D', // Chữ xám phụ
          border: '#E9ECEF', // Viền xám nhạt
          placeholder: '#ADB5BD',
          success: '#28a745',
          error: '#dc3545',
          black: '#000000',
          white: '#FFFFFF',
      },
      fontSize: {
        xxs: 10
      }
    },
  },
  plugins: [],
}