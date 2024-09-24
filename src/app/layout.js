import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/ReactToastify.min.css';
import 'react-photo-view/dist/react-photo-view.css';
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "乐福图床",
  description: "乐福图床",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-JVKEXR5XSG" />
    <style>
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        #passwordForm {
            text-align: center;
            background: white;
            padding: 20px;
            border-radius: 10px;
        }
    </style>
<body>
    <div id="overlay">
        <div id="passwordForm">
            <h2>请输入密码</h2>
            <input type="password" id="passwordInput" placeholder="Password">
            <button onclick="checkPassword()">提交</button>
        </div>
    </div>
    <script>
        function checkPassword() {
            var password = document.getElementById('passwordInput').value;
            if (password === "521024") {
                document.getElementById('overlay').style.display = 'none';
            } else {
                window.location.href = "/404";
            }
        }
    </script>
</body>
    </html>
  );
}
