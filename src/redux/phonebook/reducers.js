import { createReducer } from '@reduxjs/toolkit';
import { initialPhonebookValues } from '../constants';
import { addContact, deleteContact } from './actions';

// export const phonebookReducer = (phonebook = initialPhonebookValues, action) => {
//   switch (action.type) {
//     case 'phonebook/add':
//       const { id, name, number } = action.payload;
//       const newName = name.trim();
//       const normalizedName = newName.toLocaleLowerCase();

//       if (phonebook.some(({ name }) => name.toLocaleLowerCase() === normalizedName)) {
//         window.alert('This name already exists in the list!');
//         return [...phonebook];
//       }

//       return [
//         ...phonebook,
//         {
//           id,
//           name: newName,
//           number,
//         },
//       ];

//     case 'phonebook/delete':
//       return phonebook.filter(item => item.id !== action.payload.id);

//     default:
//       return phonebook;
//   }
// };

// export const phonebookReducer = createReducer(initialPhonebookValues, {
//   [addContact]: (phonebook, action) => {
//     const { id, name, number } = action.payload;
//     const newName = name.trim();
//     const normalizedName = newName.toLocaleLowerCase();

//     if (phonebook.some(({ name }) => name.toLocaleLowerCase() === normalizedName)) {
//       window.alert('This name already exists in the list!');
//       return [...phonebook];
//     }

//     return [
//       ...phonebook,
//       {
//         id,
//         name: newName,
//         number,
//       },
//     ];
//   },
//   [deleteContact]: (phonebook, action) => {
//     return phonebook.filter(item => item.id !== action.payload.id);
//   },
// });
