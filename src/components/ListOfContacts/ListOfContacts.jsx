import React from 'react';
import { Box } from 'components/Common/Box.styled';
import { List, ListItem, Name, Number, Button } from 'components/ListOfContacts/ListOfContacts.styled';
import { deleteContact } from 'redux/slicePhonebook';
import { useDispatch } from 'react-redux';

export const ListOfContacts = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.length > 0
        ? contacts.map(contact => (
            <ListItem key={contact.id}>
              <Box display="flex">
                <Name>{contact.name}</Name>
                <Number className="number">{contact.number}</Number>
              </Box>
              <Box>
                <Button onClick={() => dispatch(deleteContact(contact.id))}>❌</Button>
              </Box>
            </ListItem>
          ))
        : 'No matches found'}
    </List>
  );
};
