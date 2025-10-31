// import React, { useState } from 'react';
// import {
//   ControlsWrapper,
//   Label,
//   SelectWrapper,
//   TriggerButton,
//   Arrow,
//   Dropdown,
//   OptionButton
// } from "./FilterControls.styled";

// const FilterControls = () => {
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [showSortDropdown, setShowSortDropdown] = useState(false);

//   const categories = [
//     { name: 'Все' },
//     { name: 'Еда' },
//     { name: 'Транспорт' },
//     { name: 'Жилье' },
//     { name: 'Развлечения' },
//     { name: 'Образование' },
//     { name: 'Другое' },
//   ];

//   const sortOptions = [
//     { value: '', label: 'Нет' },
//     { value: 'date', label: 'Дата' },
//     { value: 'amount', label: 'Сумма' },
//   ];

//   return (
//     <ControlsWrapper>
//       <Label>
//         Фильтровать по
//         <SelectWrapper>
//           <TriggerButton
//             type="button"
//             onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
//           >
//             категории
//             <Arrow />
//           </TriggerButton>

//           {showCategoryDropdown && (
//             <Dropdown>
//               {categories.map((cat) => (
//                 <OptionButton
//                   key={cat.name}
//                   onClick={() => setShowCategoryDropdown(false)}
//                 >
//                   {cat.name}
//                 </OptionButton>
//               ))}
//             </Dropdown>
//           )}
//         </SelectWrapper>
//       </Label>

//       <Label>
//         Сортировать по
//         <SelectWrapper>
//           <TriggerButton
//             type="button"
//             onClick={() => setShowSortDropdown(!showSortDropdown)}
//           >
//             Нет
//             <Arrow />
//           </TriggerButton>

//           {showSortDropdown && (
//             <Dropdown>
//               {sortOptions.map((opt) => (
//                 <OptionButton
//                   key={opt.value}
//                   onClick={() => setShowSortDropdown(false)}
//                 >
//                   {opt.label}
//                 </OptionButton>
//               ))}
//             </Dropdown>
//           )}
//         </SelectWrapper>
//       </Label>
//     </ControlsWrapper>
//   );
// };

// export default FilterControls;