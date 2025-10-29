import React from 'react';
import {
  FormTitle,
  FieldLabel,
  FormInput,
  DateInput,
  CategoryButton,
  FormButton
} from "./ExpenseForm.styled";

const ExpenseForm = () => {
  const categories = [
    { name: 'Еда', emoji: '🍕' },
    { name: 'Транспорт', emoji: '🚗' },
    { name: 'Жилье', emoji: '🏠' },
    { name: 'Развлечения', emoji: '🎬' },
    { name: 'Образование', emoji: '📚' },
    { name: 'Другое', emoji: '📦' },
  ];

  return (
    <>
      <FormTitle>Новый расход</FormTitle>
      <form>
        <FieldLabel>Описание</FieldLabel>
        <FormInput
          placeholder="Введите описание"
        />
        
        <FieldLabel>Категории</FieldLabel>
        {categories.map((cat) => (
          <CategoryButton
            key={cat.name}
            type="button"
          >
            <span style={{ marginRight: '6px' }}>{cat.emoji}</span>
            {cat.name}
          </CategoryButton>
        ))}
        
        <FieldLabel>Дата</FieldLabel>
        <DateInput
          type="date"
        />
        
        <FieldLabel>Сумма</FieldLabel>
        <FormInput
          placeholder="Введите сумму"
        />
        
        <FormButton type="submit">Добавить новый расход</FormButton>
      </form>
    </>
  );
};

export default ExpenseForm;