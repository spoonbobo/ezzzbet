@echo off
REM EzzzBet Development Shutdown Script for Windows

echo 🛑 Stopping EzzzBet Development Environment...

REM Stop Docker services
echo 🐳 Stopping database services...
docker-compose down

echo ✅ All services stopped!
echo 💡 To remove all data, run: docker-compose down -v
pause
