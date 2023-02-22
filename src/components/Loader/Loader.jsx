import { Dna } from 'react-loader-spinner';
import { Box } from './Loader.styled';


export const Loader = () => (
  <Box>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </Box>
);
