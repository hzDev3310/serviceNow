import React from 'react';
import { View, Button, Text } from 'react-native';
import useDelete from './src/hooks/useDelete';

function App() {
  const { deleteData, loading, error } = useDelete('/users/65eb8ccba1e6f8b874b3a740');

  const handleDelete = async () => {

    await deleteData();
  };

  if (loading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error: {JSON.stringify(error)}</Text></View>;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Your delete button */}
      <Button title="Delete Data" onPress={handleDelete} />
      
    </View>
  );
}

export default App;
