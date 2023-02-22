import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import {Box, Label, Input} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
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
