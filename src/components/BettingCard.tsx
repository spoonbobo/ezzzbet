'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  Chip,
  Alert,
} from '@mui/material';
import { TrendingUp, AttachMoney } from '@mui/icons-material';
import { useAppStore } from '@/stores/useAppStore';

interface BettingCardProps {
  eventName: string;
  odds: number;
  category: string;
}

export function BettingCard({ eventName, odds, category }: BettingCardProps) {
  const [betAmount, setBetAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const { user, setLoading } = useAppStore();

  const handlePlaceBet = async () => {
    if (!user) {
      alert('Please login to place a bet');
      return;
    }

    if (!betAmount || parseFloat(betAmount) <= 0) {
      alert('Please enter a valid bet amount');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setBetAmount('');
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const potentialWin = betAmount ? (parseFloat(betAmount) * odds).toFixed(2) : '0.00';

  return (
    <Card sx={{ maxWidth: 400, m: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TrendingUp sx={{ mr: 1, color: 'primary.main' }} />
          <Chip label={category} size="small" color="primary" />
        </Box>
        
        <Typography variant="h6" component="h3" gutterBottom>
          {eventName}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
            Odds:
          </Typography>
          <Typography variant="h6" color="primary.main">
            {odds}x
          </Typography>
        </Box>

        {showSuccess && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Bet placed successfully!
          </Alert>
        )}

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Bet Amount"
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: <AttachMoney />,
            }}
            disabled={!user}
          />
        </Box>

        {betAmount && (
          <Box sx={{ mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Potential Win: <strong>${potentialWin}</strong>
            </Typography>
          </Box>
        )}

        <Button
          variant="contained"
          fullWidth
          onClick={handlePlaceBet}
          disabled={!user || !betAmount}
        >
          {user ? 'Place Bet' : 'Login to Bet'}
        </Button>
      </CardContent>
    </Card>
  );
}
