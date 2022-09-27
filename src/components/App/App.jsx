import { Box } from 'components/Common/Box.styled';
import { Section } from 'components/Section/Section';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';
import { useSelector } from 'react-redux';
import { FilterForm } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const App = () => {
  const contacts = useSelector(store => store.contacts?.items);
  const filter = useSelector(store => store.contacts?.filter.search);

  const normalizedFilter = filter?.toLocaleLowerCase();
  const filteredContacts = contacts
    ?.filter(contact => contact?.name?.toLocaleLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column">
        <Section title="Contact info">
          <ContactForm />
        </Section>
        {contacts.length > 0 && (
          <Section>
            <FilterForm />
          </Section>
        )}
      </Box>

      {contacts?.length > 0 && (
        <Box display="flex" flexDirection="column">
          <Section title="Contact list" height="100%">
            <ListOfContacts contacts={filteredContacts}></ListOfContacts>
          </Section>
        </Box>
      )}
    </Box>
  );
};
