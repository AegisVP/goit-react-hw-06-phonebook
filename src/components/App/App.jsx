import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Box } from 'components/Common/Box.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';
import { FilterForm } from 'components/Filter/Filter';

const LS_CONTACTS_KEY = 'hw_contacts_phonebook';

const exampleContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-84' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-88-76' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-98' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-98-76' },
];

export const App = () => {
  const [contacts, setContacts] = useState(exampleContacts);
  const [filter, setFilter] = useState('');
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(LS_CONTACTS_KEY);
    const parsedContacts = savedContacts ? JSON.parse(savedContacts) : exampleContacts;

    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = ({ id, name, number }) => {
    name = name.trim();
    const normalizedName = name.toLocaleLowerCase();

    if (id !== '' && id !== null) {
      onDeleteContact(id);
    } else {
      if (contacts.some(({ name }) => name.toLocaleLowerCase() === normalizedName)) {
        window.alert('This name already exists in the list!');
        return;
      }
    }

    id ||= nanoid();
    onSaveContact({ id, name, number });
    return id;
  };

  const setEditInfo = ({ editId = '', editName = '', editNumber = '' }) => {
    setEditId(editId);
    setEditName(editName);
    setEditNumber(editNumber);
  };

  const onEditContact = id => {
    const { name, number } = contacts.find(({ id: cid }) => id === cid);
    setEditInfo({ editId: id, editName: name, editNumber: number });
  };

  const onSaveContact = ({ id, name, number }) => {
    setContacts(pC => [...pC, { id, name, number }]);
    setEditInfo({ editId: '', editName: '', editNumber: '' });
  };

  const onResetForm = () => {
    setEditInfo({ editId: '', editName: '', editNumber: '' });
  };

  const onDeleteContact = id => {
    if (contacts.length === 1) clearFilterField();
    setContacts(pC => pC.filter(contact => contact.id !== id));
  };

  const onFilterContacts = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  const clearFilterField = () => {
    setFilter('');
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts
    .filter(contact => contact?.name?.toLocaleLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column">
        <Section title="Contact info">
          <ContactForm
            editId={editId}
            editName={editName}
            editNumber={editNumber}
            onSubmit={onAddContact}
            onResetForm={onResetForm}
          />
        </Section>
        {contacts.length > 0 && (
          <Section>
            <FilterForm filterValue={filter} onClear={clearFilterField} onChange={onFilterContacts} />
          </Section>
        )}
      </Box>

      {contacts.length > 0 && (
        <Box display="flex" flexDirection="column">
          <Section title="Contact list" height="100%">
            <ListOfContacts
              onEditContact={onEditContact}
              onDeleteContact={onDeleteContact}
              contacts={filteredContacts}
            ></ListOfContacts>
          </Section>
        </Box>
      )}
    </Box>
  );
};