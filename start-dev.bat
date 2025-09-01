@echo off
REM EzzzBet Development Startup Script for Windows

echo 🎰 Starting EzzzBet Development Environment...

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not running. Please start Docker first.
    pause
    exit /b 1
)

REM Start database services
echo 🐳 Starting database services...
docker-compose up -d

REM Wait for PostgreSQL to be ready
echo ⏳ Waiting for PostgreSQL to be ready...
timeout /t 5 /nobreak >nul

:wait_for_postgres
docker-compose exec -T ezzzbet-psqldb pg_isready -U ezzzbet_user -d ezzzbet_db >nul 2>&1
if errorlevel 1 (
    echo ⏳ Waiting for PostgreSQL...
    timeout /t 2 /nobreak >nul
    goto wait_for_postgres
)

echo ✅ PostgreSQL is ready!

REM Copy environment file if it doesn't exist
if not exist .env (
    echo 📝 Creating .env file from template...
    copy env.example .env
)

REM Install dependencies if node_modules doesn't exist
if not exist "ezzzbet\node_modules" (
    echo 📦 Installing dependencies...
    cd ezzzbet
    npm install
    cd ..
)

echo 🚀 Starting Electron application...
echo 📊 Database: http://localhost:5050 (pgAdmin)
echo 💾 PostgreSQL: localhost:5432
echo.
echo Press Ctrl+C to stop all services

REM Start the Electron app
cd ezzzbet
npm start
