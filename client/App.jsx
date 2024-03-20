import { NavigationContainer } from "@react-navigation/native";

import { PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
import NavigationTab from "./src/navigation/NavigationTab";

function App() {
  return (
    <PaperProvider>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";
// import useUpdate from "./src/apis/useUpdate";
// import { TextInput } from "react-native-paper";

// const App = () => {
//   const { updateData, loading, error, responseData } = useUpdate();
//   const [formData, setFormData] = useState({
//     // Define your form data state here
//     // For example:
//     name: "",
//     email: "",
//     // Add more fields as needed
//   });

//   const handleUpdate = async () => {
//     // Call the updateData function with appropriate endpoint and data
//     await updateData("/messages", {
//       convId: "65f8c7bd1f797fadf5f5c180",
//       sender: "65ec3f6dd574c89f2729639a",
//       content: "cc love",
//     });
//   };

//   return (
//     <View>
//       <Text>Update Data</Text>
//       {/* Your form inputs */}
//       <TextInput
//         placeholder="Name"
//         value={formData.name}
//         onChangeText={(text) => setFormData({ ...formData, name: text })}
//       />
//       <TextInput
//         placeholder="Email"
//         value={formData.email}
//         onChangeText={(text) => setFormData({ ...formData, email: text })}
//       />
//       {/* Button to trigger the update */}
//       <Button title="Update" onPress={handleUpdate} />
//       {/* Display loading state */}
//       {true && <Text>Loading...</Text>}
//       {/* Display error if any */}
//       {true && <Text>Error: {error}</Text>}
//       {/* Display response data if available */}
//       {true && (
//         <Text>Response Data: {JSON.stringify(responseData)}</Text>
//       )}
//     </View>
//   );
// };

// export default App;
