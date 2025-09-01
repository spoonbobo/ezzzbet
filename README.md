# EzzzBet - Electron Betting Application

A modern desktop betting application built with Electron, React, MUI v7, and Zustand for state management.

## Features

- 🎰 Modern betting interface with Material-UI v7
- 🌙 Dark/Light theme support
- 💾 PostgreSQL database integration
- 🔄 Real-time state management with Zustand
- 🐳 Docker development environment
- 📱 Responsive design
- 🔔 Toast notifications

## Tech Stack

- **Frontend**: React 19, Material-UI v7, Zustand
- **Backend**: Electron, Node.js, PostgreSQL
- **Development**: Docker Compose, TypeScript, Webpack
- **Database**: PostgreSQL with Docker

## Development Setup

### Prerequisites

- Node.js (>=14.x)
- Docker and Docker Compose
- npm (>=7.x)

### Quick Start

1. **Clone and setup the project**:
   ```bash
   git clone <repository-url>
   cd ezzzbet
   ```

2. **Start the database services**:
   ```bash
   docker-compose up -d
   ```
   This will start:
   - PostgreSQL database on port 5432
   - pgAdmin on port 5050 (admin@admin.com / admin)

3. **Setup environment variables**:
   ```bash
   cp env.example .env
   ```

4. **Install dependencies and start the Electron app**:
   ```bash
   cd ezzzbet
   npm install
   npm start
   ```

### Database Access

- **PostgreSQL**: `localhost:5432`
  - Database: `ezzzbet_db`
  - User: `ezzzbet_user`
  - Password: `ezzzbet_pass`

- **pgAdmin**: `http://localhost:5050`
  - Email: `admin@admin.com`
  - Password: `admin`

### Available Scripts

In the `ezzzbet` directory:

- `npm start` - Start the development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run package` - Package the app for distribution

## Project Structure

```
ezzzbet/
├── src/
│   ├── main/                 # Electron main process
│   │   ├── main.ts          # Main process entry point
│   │   ├── preload.ts       # Preload script for IPC
│   │   └── menu.ts          # Application menu
│   └── renderer/            # Electron renderer process
│       ├── components/      # React components
│       ├── stores/          # Zustand stores
│       ├── utils/           # Utility functions
│       ├── types/           # TypeScript type definitions
│       └── App.tsx          # Main React component
├── assets/                  # Static assets
├── db_seeds/               # Database initialization scripts
├── docker-compose.yml      # Docker services configuration
└── package.json           # Dependencies and scripts
```

## Key Components

### Stores (Zustand)

- **useAppStore**: Global app state (user, theme, locale)
- **useBettingStore**: Betting-related state management

### Components

- **ThemeProvider**: MUI theme management with dark/light mode
- **BettingCard**: Interactive betting card component
- **Toast**: Custom toast notification system

### Database Integration

The app includes a complete PostgreSQL integration with:
- Connection management via IPC
- CRUD operations
- Database seeding
- Error handling

## Development Features

- Hot reload for development
- Redux DevTools integration (Zustand)
- TypeScript support
- ESLint configuration
- Docker development environment

## Building for Production

```bash
cd ezzzbet
npm run build
npm run package
```

This will create a distributable package in the `release/build` directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.