import { List, ListItem, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { useEffect} from 'react';



export const ContactList = () => {
   const dispatch = useDispatch();
   const contacts = useSelector(contactsSelectors.getContacts);
   const filter = useSelector(contactsSelectors.setFilter);

   useEffect(() => {
      dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

   const getFilteredContacts = () => {
      const filterContactsList = contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(filter.toLowerCase());
      });
    
      return filterContactsList;
    };
return (
   <>
   {contacts.length > 0 && (
      <List>
      {getFilteredContacts().map((contact, id) => (
     <ListItem key={id}>
       {contact.name}: {contact.phone}
       <Button onClick={() => dispatch(contactsOperations.deleteContact(contact.id))}>
        Delete</Button>
     </ListItem>
    ))}
    </List>
   )}
   </> 
)
}
