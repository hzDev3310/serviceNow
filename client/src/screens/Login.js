import React from 'react';
import useFetch  from '../hooks/useGet'

const Login = () => {
  const { data, isLoading, error, fetchGet, fetchPost, fetchPut, fetchDelete } = useFetch('/users');

  // Example usage:
  fetchGet('/users'); // To fetch data
  // fetchPost({ key: 'value' }); // To create data
  // fetchPut({ key: 'updated value' }); // To update data
  // fetchDelete(); // To delete data

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {/* Render your UI based on the fetched data */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Login;
