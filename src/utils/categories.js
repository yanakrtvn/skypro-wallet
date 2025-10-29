import React from 'react';
import { 
  FoodIcon, 
  TransportIcon, 
  HousingIcon, 
  EntertainmentIcon, 
  EducationIcon, 
  OtherIcon 
} from '../components/common/icons/Icons';

export const getCategoryIcon = (category) => {
  switch (category) {
    case 'food':
      return <FoodIcon />;
    case 'transport':
      return <TransportIcon />;
    case 'housing':
      return <HousingIcon />;
    case 'entertainment':
      return <EntertainmentIcon />;
    case 'education':
      return <EducationIcon />;
    default:
      return <OtherIcon />;
  }
};

export const getCategoryName = (category) => {
  switch (category) {
    case 'food':
      return 'Еда';
    case 'transport':
      return 'Транспорт';
    case 'housing':
      return 'Жилье';
    case 'entertainment':
      return 'Развлечения';
    case 'education':
      return 'Образование';
    default:
      return 'Другое';
  }
};

export const CATEGORIES = [
  { id: 'food', name: 'Еда', emoji: '🍕' },
  { id: 'transport', name: 'Транспорт', emoji: '🚗' },
  { id: 'housing', name: 'Жилье', emoji: '🏠' },
  { id: 'entertainment', name: 'Развлечения', emoji: '🎬' },
  { id: 'education', name: 'Образование', emoji: '📚' },
  { id: 'other', name: 'Другое', emoji: '📦' },
];