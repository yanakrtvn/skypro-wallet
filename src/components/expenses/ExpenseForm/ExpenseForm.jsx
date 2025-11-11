import React, { useState } from 'react';
import { useTransactions } from '../../../hooks/useTransactions';
import {
  FormTitle,
  FieldLabel,
  FormInput,
  CategoryButton,
  FormButton,
  CategoriesGrid,
  ErrorMessage
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
    sum: ''
  });
  const [errors, setErrors] = useState({});
  const { addTransaction, loadTransactions, loading } = useTransactions();

  const categories = [
    { name: 'food', displayName: 'Еда', icon: <FoodIcon /> },
    { name: 'transport', displayName: 'Транспорт', icon: <TransportIcon /> },
    { name: 'housing', displayName: 'Жилье', icon: <HousingIcon /> },
    { name: 'joy', displayName: 'Развлечения', icon: <EntertainmentIcon /> },
    { name: 'education', displayName: 'Образование', icon: <EducationIcon /> },
    { name: 'others', displayName: 'Другое', icon: <OtherIcon /> },
  ];

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'description': {
        if (value.length < 4) {
          newErrors.description = 'Описание должно содержать минимум 4 символа';
        } else {
          delete newErrors.description;
        }
        break;
      }
      case 'sum': {
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue <= 0) {
          newErrors.sum = 'Сумма должна быть положительным числом';
        } else {
          delete newErrors.sum;
        }
        break;
      }
      case 'date': {
        if (!value.trim()) {
          newErrors.date = 'Дата обязательна';
        } else {
          delete newErrors.date;
        }
        break;
      }
      default:
        break;
    }
    
    setErrors(newErrors);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    validateField(field, value);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.description.trim()) {
      newErrors.description = 'Описание обязательно';
    } else if (formData.description.length < 4) {
      newErrors.description = 'Описание должно содержать минимум 4 символа';
    }
    
    if (!selectedCategory) {
      newErrors.category = 'Выберите категорию';
    }
    
    if (!formData.date.trim()) {
      newErrors.date = 'Дата обязательна';
    }
    
    if (!formData.sum.trim()) {
      newErrors.sum = 'Сумма обязательна';
    } else {
      const numValue = parseFloat(formData.sum);
      if (isNaN(numValue) || numValue <= 0) {
        newErrors.sum = 'Сумма должна быть положительным числом';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const transactionData = {
        description: formData.description,
        sum: parseFloat(formData.sum),
        category: selectedCategory,
        date: formData.date
      };
      
      await addTransaction(transactionData);
      
      await loadTransactions();
      
      setFormData({
        description: '',
        date: '',
        sum: ''
      });
      setSelectedCategory(null);
      setErrors({});
      
    } catch (transactionError) {
      console.error('Error adding transaction:', transactionError);
      setErrors({ submit: transactionError.message });
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setErrors(prev => ({ ...prev, category: undefined }));
  };

  return (
    <>
      <FormTitle>Новый расход</FormTitle>
      <form onSubmit={handleSubmit}>
        <FieldLabel>Описание</FieldLabel>
        <FormInput
          placeholder="Введите описание"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          $hasError={!!errors.description}
        />
        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
        
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
              {cat.displayName}
            </CategoryButton>
          ))}
        </CategoriesGrid>
        {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
        
        <FieldLabel>Дата</FieldLabel>
        <FormInput
          placeholder="Введите дату в формате ДД-ММ-ГГГГ"
          value={formData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          $hasError={!!errors.date}
        />
        {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
        
        <FieldLabel>Сумма</FieldLabel>
        <FormInput
          placeholder="Введите сумму"
          value={formData.sum}
          onChange={(e) => handleInputChange('sum', e.target.value)}
          $hasError={!!errors.sum}
        />
        {errors.sum && <ErrorMessage>{errors.sum}</ErrorMessage>}
        
        {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
        
        <FormButton type="submit" disabled={loading}>
          {loading ? 'Добавление...' : 'Добавить новый расход'}
        </FormButton>
      </form>
    </>
  );
};

export default ExpenseForm;