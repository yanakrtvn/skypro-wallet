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
    case 'joy':
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
    case 'joy':
      return 'Развлечения';
    case 'education':
      return 'Образование';
    default:
      return 'Другое';
  }
};

export const CATEGORIES = [
  { id: 'food', name: 'Еда' },
  { id: 'transport', name: 'Транспорт' },
  { id: 'housing', name: 'Жилье' },
  { id: 'entertainment', name: 'Развлечения' },
  { id: 'joy', name: 'Развлечения' },
  { id: 'education', name: 'Образование' },
  { id: 'others', name: 'Другое' },
];