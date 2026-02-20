import React from 'react';
import { PlantSearchLg } from './PlantSearchLg';
import { useTheme } from '@emotion/react';
import { Typography, useMediaQuery } from '@mui/material';
import { PlantSearchXs } from './PlantSearchXs';
import { PlantSearchMd } from './PlantSearchMd';

export const PlantSearch: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  if(isXs) return <PlantSearchXs />;
  if(isMd) return <PlantSearchMd />;
  return <PlantSearchLg /> ;
};
