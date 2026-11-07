@echo off
title Trien khai AI4IELTS+ len Internet
echo ========================================================
echo        DANG KHOI TAO TRIEN KHAI LEN INTERNET
echo                 NEN TANG AI4IELTS+
echo ========================================================
echo.
echo He thong se tu dong goi Vercel CLI de xuat ban website.
echo Neu la lan dau, trinh duyet se mo de ban dang nhap (Google hoac GitHub).
echo.
cd /d "C:\Users\khoin\Downloads\Luyện thi IELTS"
npx vercel
echo.
echo Tiep tuc xuat ban ban chinh thuc (Production)...
npx vercel --prod
echo.
echo ========================================================
echo   TRIEN KHAI HOAN TAT! WEB CUA BAN DA CO MAT TREN INTERNET!
echo ========================================================
pause
