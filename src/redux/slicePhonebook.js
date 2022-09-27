const { createSlice, nanoid } = require('@reduxjs/toolkit');
const { initialPhonebookValues } = require('./constants');

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: initialPhonebookValues,
  reducers: {
    addContact(phonebook, action) {
      const id = nanoid();
      const { name, number } = action.payload;
      const newName = name.trim();
      const normalizedName = newName.toLocaleLowerCase();

      if (phonebook.some(({ name }) => name.toLocaleLowerCase() === normalizedName)) {
        window.alert('This name already exists in the list!');
        return [...phonebook];
      }

      return [
        ...phonebook,
        {
          id,
          name: newName,
          number,
        },
      ];
    },

    deleteContact(phonebook, action) {
      return phonebook.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
