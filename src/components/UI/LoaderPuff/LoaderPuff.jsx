import { Puff } from 'react-loader-spinner';
import { LoaderPuffContainer } from './LoaderPuff.styled';

const LoaderPuff = () => {
  return (
    <LoaderPuffContainer>
      <Puff
        visible={true}
        height="100"
        width="100"
        color="#E44848"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderPuffContainer>
  );
};

export default LoaderPuff;
