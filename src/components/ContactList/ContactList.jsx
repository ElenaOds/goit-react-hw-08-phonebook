import { List, ListItem, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import {fetchContacts, deleteContact} from '../../redux/contacts/operations';
import { useEffect} from 'react';



export const ContactList = () => {
   const dispatch = useDispatch();
   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);

   useEffect(() => {
      dispatch(fetchContacts());
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
       {contact.name}: {contact.number}
       <Button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete</Button>
     </ListItem>
    ))}
    </List>
   )}
   </> 
)
}