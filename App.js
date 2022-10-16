import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Adila'   , key: '1' },
    { name: 'Mim'     , key: '2' },
    { name: 'Masfiya' , key: '3' },
    { name: 'Sumaiya' , key: '4' },
    { name: 'Jumur'   , key: '5' },
    { name: 'Pushpita', key: '6' },
    { name: 'Niha'    , key: '7' },
    { name: 'Anjuman' , key: '8' },

  ]);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
  },  
}) 