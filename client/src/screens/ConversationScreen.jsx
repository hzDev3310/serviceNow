import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, IconButton, List } from 'react-native-paper';


const ConversationScreen = () => {
 
  const chatData = [
    { id: 1, sender: 'Alice', message: 'Hello!' },
    { id: 2, sender: 'Bob', message: 'Hi there!' },
    { id: 3, sender: 'Charlie', message: 'Hey, how are you?' },
  
  ];

  return (
    <View style={styles.container}>
      <IconButton icon="close" />
      <List.Section>
        {chatData.map(chat => (
          <List.Item
            key={chat.id}
            title={chat.sender}
            description={chat.message}
            left={props => <List.Icon {...props} icon="chat" />}
            onPress={() => console.log(`Clicked on chat with ${chat.sender}`)}
          />
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ConversationScreen;
