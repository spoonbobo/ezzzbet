# Getting Started with EzzzBet

## Quick Start Guide

### 1. Prerequisites Check
- ✅ Node.js (>=14.x)
- ✅ Docker Desktop
- ✅ npm (>=7.x)

### 2. Environment Setup

**Option A: Automatic (Recommended)**
```bash
# For Windows
start-dev.bat

# For Mac/Linux
./start-dev.sh
```

**Option B: Manual Setup**
```bash
# 1. Start database
docker-compose up -d

# 2. Setup environment
cp env.example .env

# 3. Install dependencies
cd ezzzbet
npm install --legacy-peer-deps

# 4. Start the app
npm start
```

### 3. First Run

1. **Database will be automatically initialized** with sample tables
2. **Click "Demo Login"** to start using the app
3. **Try the features**:
   - Toggle dark/light theme
   - Place a new bet (click the + button)
   - Edit/delete existing bets

### 4. Development Tools

- **pgAdmin**: http://localhost:5050
  - Email: `admin@admin.com`
  - Password: `admin`
- **PostgreSQL**: `localhost:5432`
- **Electron DevTools**: Built-in (F12)

### 5. Project Features

✨ **Modern UI**: Material-UI v7 with dark/light themes
🔄 **State Management**: Zustand stores with Redux DevTools
💾 **Database**: Full PostgreSQL integration
🔔 **Notifications**: Custom toast system
🎯 **TypeScript**: Full type safety
🐳 **Docker**: Containerized development

### 6. Troubleshooting

**Database Connection Issues:**
```bash
# Restart database services
docker-compose down
docker-compose up -d
```

**Dependency Issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Port Conflicts:**
- PostgreSQL: 5432 (change in docker-compose.yml)
- pgAdmin: 5050 (change in docker-compose.yml)

### 7. Next Steps

1. **Customize the UI** - Edit components in `src/renderer/components/`
2. **Add new features** - Use Zustand stores for state management
3. **Database changes** - Update `db_seeds/01_init.sql`
4. **Build for production** - Run `npm run package`

### 8. Architecture Overview

```
EzzzBet Architecture
├── Electron Main Process (Node.js)
│   ├── Database connections (PostgreSQL)
│   ├── IPC handlers
│   └── Window management
├── Electron Renderer Process (React)
│   ├── MUI Components
│   ├── Zustand Stores
│   ├── Toast System
│   └── Database Utils
└── Docker Services
    ├── PostgreSQL Database
    └── pgAdmin Interface
```

Happy coding! 🎰
