@echo off
title Dashboard LEGO IVALOR
color 0A
echo.
echo ========================================
echo   DASHBOARD LEGO IVALOR
echo   Framework IVALOR - Liliana Bolos
echo ========================================
echo.
echo Iniciando servidor de desarrollo...
echo.
echo El dashboard se abrira automaticamente en:
echo http://localhost:3000
echo.
echo IMPORTANTE:
echo - NO cierres esta ventana mientras uses el dashboard
echo - Para DETENER el servidor: Presiona Ctrl+C
echo.
echo ========================================
echo.

cd /d "%~dp0"
start http://localhost:3000
pnpm dev

