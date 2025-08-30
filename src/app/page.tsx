'use client';

import { Container, Typography, Button, Card, CardContent, Box, Switch, FormControlLabel } from '@mui/material';
import { Casino, Sports, TrendingUp } from '@mui/icons-material';
import { useAppStore } from '@/stores/useAppStore';
import { BettingCard } from '@/components/BettingCard';

export default function Home() {
  const { user, theme, toggleTheme, setUser } = useAppStore();

  const handleLogin = () => {
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to EzzzBet
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your premier betting platform with the best odds and experience
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          <FormControlLabel
            control={<Switch checked={theme === 'dark'} onChange={toggleTheme} />}
            label={`${theme === 'dark' ? 'Dark' : 'Light'} Mode`}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          {user ? (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Welcome back, {user.name}!
              </Typography>
              <Button variant="outlined" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          ) : (
            <Button variant="contained" size="large" onClick={handleLogin}>
              Login to Get Started
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        <Card>
          <CardContent sx={{ textAlign: 'center', p: 3 }}>
            <Casino sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" component="h3" gutterBottom>
              Casino Games
            </Typography>
            <Typography color="text.secondary" paragraph>
              Experience the thrill of our extensive casino game collection with live dealers and exciting slots.
            </Typography>
            <Button variant="outlined" fullWidth>
              Play Now
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center', p: 3 }}>
            <Sports sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" component="h3" gutterBottom>
              Sports Betting
            </Typography>
            <Typography color="text.secondary" paragraph>
              Bet on your favorite sports with competitive odds and live betting options.
            </Typography>
            <Button variant="outlined" fullWidth>
              View Sports
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center', p: 3 }}>
            <TrendingUp sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" component="h3" gutterBottom>
              Live Statistics
            </Typography>
            <Typography color="text.secondary" paragraph>
              Track your performance with detailed analytics and real-time statistics.
            </Typography>
            <Button variant="outlined" fullWidth>
              View Stats
            </Button>
          </CardContent>
        </Card>
      </Box>

      {user && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
            Featured Bets
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BettingCard
              eventName="Lakers vs Warriors"
              odds={2.5}
              category="NBA"
            />
            <BettingCard
              eventName="Manchester United vs Arsenal"
              odds={1.8}
              category="Premier League"
            />
            <BettingCard
              eventName="Bitcoin Price > $100k"
              odds={3.2}
              category="Crypto"
            />
          </Box>
        </Box>
      )}
    </Container>
  );
}
