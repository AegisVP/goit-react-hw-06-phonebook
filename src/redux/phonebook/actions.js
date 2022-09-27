import { nanoid } from '@reduxjs/toolkit';

export const addContact = ({ id = nanoid(), name, number }) => {
  return {
    type: 'phonebook/add',
    payload: {
      id,
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'phonebook/delete',
    payload: { id },
  };
};
