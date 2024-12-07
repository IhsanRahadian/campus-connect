import { useState, useCallback } from 'react';
import { processMatching } from '../services/expertSystem';
import { api } from '../services/api';

export function useExpertSystem() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateRecommendations = useCallback(async (userData) => {
    try {
      setLoading(true);
      setError(null);

      // Get potential matches from API
      const potentialMatches = await api.getPotentialMatches();
      
      // Process matches using expert system
      const matches = await processMatching(userData, potentialMatches);
      
      setRecommendations(matches);
      return matches;
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    recommendations,
    loading,
    error,
    generateRecommendations
  };
}