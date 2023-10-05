# ใช้เว็บเซิร์ฟเวอร์ Nginx เป็นฐาน
FROM nginx:alpine

# คัดลอกไฟล์เว็บแอปลงในโฟลเดอร์ /usr/share/nginx/html
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# เปิดพอร์ต 80
EXPOSE 80

# เริ่ม Nginx เมื่อ Docker container ทำงาน
CMD ["nginx", "-g", "daemon off;"]
