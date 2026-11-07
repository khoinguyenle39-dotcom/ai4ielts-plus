@echo off
title IELTS LinearMind Server
echo ========================================================
echo    DANG KHOI CHAY HE THONG IELTS LINEARMIND...
echo ========================================================
echo.
cd /d "%~dp0"
echo 1. Dang ket noi toi Supabase Cloud...
echo 2. Dang bat server tai http://localhost:3000...
echo.
start http://localhost:3000
npm start
pause
