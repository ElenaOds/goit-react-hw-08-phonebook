import {Box, Label, Input} from './Filter.styled';
import { filterContact } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.setFilter);


  const handleChange = e => {
    const { value } = e.target;
    dispatch(filterContact(value));
  }; 

  return (
    <Box>
    <Label>Find contacts by Name </Label>
    <Input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
   
  </Box>
  )
}
  
