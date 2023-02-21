import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { ContactForm }  from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { MainTitle, Title } from './Contacts.styled';


export const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);


  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList  />
      </div>
    )  
};