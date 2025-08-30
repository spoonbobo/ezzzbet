# EzzzBet

A modern betting platform built with Next.js, MUI v7, Zustand, and PostgreSQL.

## Features

- 🚀 **Next.js 15** with App Router and TypeScript
- 🎨 **Material-UI v7** for beautiful, responsive UI components
- 🔄 **Zustand** for lightweight state management
- 🐘 **PostgreSQL** database with connection pooling
- 🐳 **Docker** containerization with Docker Compose
- 📦 **pnpm** for fast package management
- 🎯 **ESLint** for code quality
- 🎨 **Tailwind CSS** for utility-first styling

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm
- Docker & Docker Compose

### Installation

1. **Clone and setup:**
   ```bash
   git clone <repository-url>
   cd ezzzbet
   pnpm install
   ```

2. **Environment setup:**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Start with Docker (Recommended):**
   ```bash
   # Start all services
   pnpm run docker:up
   
   # View logs
   pnpm run docker:logs
   
   # Stop services
   pnpm run docker:down
   ```

4. **Or start development locally:**
   ```bash
   # Start only database
   pnpm run db:up
   
   # Start Next.js dev server
   pnpm run dev
   ```

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

### Docker Scripts

- `pnpm run docker:build` - Build Docker images
- `pnpm run docker:up` - Start all services
- `pnpm run docker:down` - Stop all services
- `pnpm run docker:logs` - View service logs
- `pnpm run db:up` - Start only database
- `pnpm run db:down` - Stop database

## Services

When running with Docker Compose, the following services are available:

- **App**: http://localhost:3000 - Main Next.js application
- **PostgreSQL**: localhost:5432 - Database server
- **pgAdmin**: http://localhost:5050 - Database administration
  - Email: admin@admin.com
  - Password: admin

## API Endpoints

- `GET /api/health` - Health check and database status

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── lib/                # Utility libraries
│   └── db.ts          # Database configuration
├── providers/          # React providers
│   └── ThemeProvider.tsx
├── stores/             # Zustand stores
│   └── useAppStore.ts
└── theme/              # MUI theme configuration
    └── theme.ts
```

## Database

The application uses PostgreSQL with the following tables:
- `users` - User accounts and balances
- `bets` - Betting records
- `transactions` - Financial transactions

Database seeds are automatically applied from `db_seeds/` directory.

## Development

1. The app uses MUI v7 components with a custom theme
2. Zustand provides lightweight state management
3. PostgreSQL handles data persistence
4. Docker Compose orchestrates the development environment

## Environment Variables

Key environment variables (see `env.example`):

```env
# Database
POSTGRES_USER=ezzzbet_user
POSTGRES_PASSWORD=ezzzbet_password
POSTGRES_DB=ezzzbet_db
PGHOST=localhost
PGPORT=5432

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is private and proprietary.