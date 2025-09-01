#!/bin/bash

# EzzzBet Development Startup Script

echo "🎰 Starting EzzzBet Development Environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Start database services
echo "🐳 Starting database services..."
docker-compose up -d

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
sleep 5

# Check if PostgreSQL is ready
until docker-compose exec -T ezzzbet-psqldb pg_isready -U ezzzbet_user -d ezzzbet_db; do
    echo "⏳ Waiting for PostgreSQL..."
    sleep 2
done

echo "✅ PostgreSQL is ready!"

# Copy environment file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.example .env
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "ezzzbet/node_modules" ]; then
    echo "📦 Installing dependencies..."
    cd ezzzbet
    npm install
    cd ..
fi

echo "🚀 Starting Electron application..."
echo "📊 Database: http://localhost:5050 (pgAdmin)"
echo "💾 PostgreSQL: localhost:5432"
echo ""
echo "Press Ctrl+C to stop all services"

# Start the Electron app
cd ezzzbet
npm start
