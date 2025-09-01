#!/bin/bash

# EzzzBet Development Shutdown Script

echo "🛑 Stopping EzzzBet Development Environment..."

# Stop Docker services
echo "🐳 Stopping database services..."
docker-compose down

echo "✅ All services stopped!"
echo "💡 To remove all data, run: docker-compose down -v"
