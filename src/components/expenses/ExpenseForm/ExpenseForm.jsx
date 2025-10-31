import React, { useState } from 'react';
import {
  FormTitle,
  FieldLabel,
  FormInput,
  CategoryButton,
  FormButton,
  CategoriesGrid
} from "./ExpenseForm.styled";
import {
  FoodIcon,
  TransportIcon,
  HousingIcon,
  EntertainmentIcon,
  EducationIcon,
  OtherIcon
} from '../../common/icons/Icons';

const ExpenseForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    description: '',
    date: '',
    amount: ''
  });
  const [isValid, setIsValid] = useState({
    description: false,
    date: false,
    amount: false
  });

  const categories = [
    { name: 'Еда', icon: <FoodIcon /> },
    { name: 'Транспорт', icon: <TransportIcon /> },
    { name: 'Жилье', icon: <HousingIcon /> },
    { name: 'Развлечения', icon: <EntertainmentIcon /> },
    { name: 'Образование', icon: <EducationIcon /> },
    { name: 'Другое', icon: <OtherIcon /> },
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    let valid = false;
    switch (field) {
      case 'description':
        valid = value.trim().length > 0;
        break;
      case 'date':
        valid = value.trim().length > 0;
        break;
      case 'amount':
        valid = !isNaN(value) && parseFloat(value) > 0;
        break;
      default:
        break;
    }

    setIsValid(prev => ({
      ...prev,
      [field]: valid
    }));
  };

  return (
    <>
      <FormTitle>Новый расход</FormTitle>
      <form>
        <FieldLabel>Описание</FieldLabel>
        <FormInput
          placeholder="Введите описание"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          $valid={isValid.description}
        />
        
        <FieldLabel>Категории</FieldLabel>
        <CategoriesGrid>
          {categories.map((cat) => (
            <CategoryButton
              key={cat.name}
              type="button"
              $selected={selectedCategory === cat.name}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <span style={{ marginRight: '6px' }}>{cat.icon}</span>
              {cat.name}
            </CategoryButton>
          ))}
        </CategoriesGrid>
        
        <FieldLabel>Дата</FieldLabel>
        <FormInput
          placeholder="Введите дату"
          value={formData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          $valid={isValid.date}
        />
        
        <FieldLabel>Сумма</FieldLabel>
        <FormInput
          placeholder="Введите сумму"
          value={formData.amount}
          onChange={(e) => handleInputChange('amount', e.target.value)}
          $valid={isValid.amount}
        />
        
        <FormButton type="submit">Добавить новый расход</FormButton>
      </form>
    </>
  );
};

export default ExpenseForm;