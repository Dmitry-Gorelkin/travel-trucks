import { Puff } from 'react-loader-spinner';

const LoaderPuff = () => {
  return (
    <Puff
      visible={true}
      height="100"
      width="100"
      color="#E44848"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoaderPuff;
