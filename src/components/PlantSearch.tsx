import React, { useState, useMemo } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import Fuse from 'fuse.js';
import type { Plant } from '@/types/plant';
import { useChartFilter } from '@/contexts/ChartFilterProvider';

interface PlantSearchProps {
  allPlants: Plant[];
}

export const PlantSearch: React.FC<PlantSearchProps> = ({ allPlants }) => {
  const [query, setQuery] = useState('');
  const { setFilteredPlants } = useChartFilter();

  // Initialize Fuse.js once per plants list
  const fuse = useMemo(() => {
    return new Fuse(allPlants, {
      keys: ['commonName', 'scientificName'],
      threshold: 0.3, // tweak for strictness/fuzziness
      ignoreLocation: true,
    });
  }, [allPlants]);

  const handleSearch = () => {
    if (!query) {
      setFilteredPlants(allPlants); // show all if empty
      return;
    }

    const results = fuse.search(query).map(r => r.item);
    setFilteredPlants(results);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
      <TextField
        label="Search Plants"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        size="small"
        fullWidth
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Stack>
  );
};
