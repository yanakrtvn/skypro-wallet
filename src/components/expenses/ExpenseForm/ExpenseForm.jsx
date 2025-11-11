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
  const [fieldValidity, setFieldValidity] = useState({
    description: false,
    date: false,
    sum: false,
    category: false
  });
  const { addTransaction, loadTransactions, loading } = useTransactions();

  const categories = [
    { name: 'food', displayName: 'Еда', icon: <FoodIcon /> },
    { name: 'transport', displayName: 'Транспорт', icon: <TransportIcon /> },
    { name: 'housing', displayName: 'Жилье', icon: <HousingIcon /> },
    { name: 'joy', displayName: 'Развлечения', icon: <EntertainmentIcon /> },
    { name: 'education', displayName: 'Образование', icon: <EducationIcon /> },
    { name: 'others', displayName: 'Другое', icon: <OtherIcon /> },
  ];

  const formatDateForAPI = (dateString) => {
    if (!dateString) return '';
    
    if (dateString.match(/^\d{2}-\d{2}-\d{4}$/)) {
      return dateString;
    }
    
    if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const [year, month, day] = dateString.split('-');
      return `${day}-${month}-${year}`;
    }
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; 
    }
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
  };

  const isValidDate = (dateString) => {
    if (!dateString) return false;
    
    if (dateString.match(/^\d{2}-\d{2}-\d{4}$/)) {
      const [day, month, year] = dateString.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      return date.getDate() === day && 
             date.getMonth() === month - 1 && 
             date.getFullYear() === year;
    }
    
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    const newFieldValidity = { ...fieldValidity };
    
    switch (name) {
      case 'description': {
        if (value.length < 4) {
          newErrors.description = 'Описание должно содержать минимум 4 символа';
          newFieldValidity.description = false;
        } else {
          delete newErrors.description;
          newFieldValidity.description = true;
        }
        break;
      }
      case 'sum': {
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue <= 0) {
          newErrors.sum = 'Сумма должна быть положительным числом';
          newFieldValidity.sum = false;
        } else {
          delete newErrors.sum;
          newFieldValidity.sum = true;
        }
        break;
      }
      case 'date': {
        if (!value.trim()) {
          newErrors.date = 'Дата обязательна';
          newFieldValidity.date = false;
        } else if (!isValidDate(value)) {
          newErrors.date = 'Введите корректную дату в формате ДД-ММ-ГГГГ';
          newFieldValidity.date = false;
        } else {
          delete newErrors.date;
          newFieldValidity.date = true;
        }
        break;
      }
      default:
        break;
    }
    
    setErrors(newErrors);
    setFieldValidity(newFieldValidity);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (value.length > 0) {
      validateField(field, value);
    } else {
      const newFieldValidity = { ...fieldValidity };
      newFieldValidity[field] = false;
      setFieldValidity(newFieldValidity);
      
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const newFieldValidity = {
      description: false,
      date: false,
      sum: false,
      category: false
    };
    
    if (!formData.description.trim()) {
      newErrors.description = 'Описание обязательно';
    } else if (formData.description.length < 4) {
      newErrors.description = 'Описание должно содержать минимум 4 символа';
    } else {
      newFieldValidity.description = true;
    }
    
    if (!selectedCategory) {
      newErrors.category = 'Выберите категорию';
    } else {
      newFieldValidity.category = true;
    }
    
    if (!formData.date.trim()) {
      newErrors.date = 'Дата обязательна';
    } else if (!isValidDate(formData.date)) {
      newErrors.date = 'Введите корректную дату в формате ДД-ММ-ГГГГ';
    } else {
      newFieldValidity.date = true;
    }
    
    if (!formData.sum.trim()) {
      newErrors.sum = 'Сумма обязательна';
    } else {
      const numValue = parseFloat(formData.sum);
      if (isNaN(numValue) || numValue <= 0) {
        newErrors.sum = 'Сумма должна быть положительным числом';
      } else {
        newFieldValidity.sum = true;
      }
    }
    
    setErrors(newErrors);
    setFieldValidity(newFieldValidity);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return fieldValidity.description && 
           fieldValidity.date && 
           fieldValidity.sum && 
           fieldValidity.category;
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
        date: formatDateForAPI(formData.date)
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
      setFieldValidity({
        description: false,
        date: false,
        sum: false,
        category: false
      });
      
    } catch (transactionError) {
      console.error('Error adding transaction:', transactionError);
      setErrors({ submit: transactionError.message });
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setErrors(prev => ({ ...prev, category: undefined }));
    
    setFieldValidity(prev => ({
      ...prev,
      category: true
    }));
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
          $valid={fieldValidity.description && !errors.description}
        />
        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
        
        <FieldLabel>Категории</FieldLabel>
        <CategoriesGrid>
          {categories.map((cat) => (
            <CategoryButton
              key={cat.name}
              type="button"
              $selected={selectedCategory === cat.name}
              $valid={fieldValidity.category}
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
          placeholder="Введите дату"
          value={formData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          $hasError={!!errors.date}
          $valid={fieldValidity.date && !errors.date}
        />
        {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
        
        <FieldLabel>Сумма</FieldLabel>
        <FormInput
          placeholder="Введите сумму"
          value={formData.sum}
          onChange={(e) => handleInputChange('sum', e.target.value)}
          $hasError={!!errors.sum}
          $valid={fieldValidity.sum && !errors.sum}
        />
        {errors.sum && <ErrorMessage>{errors.sum}</ErrorMessage>}
        
        {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
        
        <FormButton 
          type="submit" 
          disabled={!isFormValid() || loading}
          $disabled={!isFormValid() || loading}
        >
          {loading ? 'Добавление...' : 'Добавить новый расход'}
        </FormButton>
      </form>
    </>
  );
};

export default ExpenseForm;