import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Keyboard} from 'react-native';

import Card from './components/Card';

export default function App() {
  Keyboard.dismiss();
  const [card, setCard]: [string | undefined, any] = useState();
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    // setCards([...cards, card]);
    // setCard(null);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>nemu</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => handleAddCard()}>
            <Text style={[styles.title, styles.icon]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View style={styles.items}>
        {cards.map((item, index) => {
          return <Card key={index} name={item} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderColor: 'silver',
    borderBottomWidth: 1,
    flexDirection: 'row',
    // backgroundColor: 'aqua',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  icon: {
    paddingHorizontal: 6,
  },
  items: {
    paddingTop: 5,
  },
  writeCardWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 12,
    width: 250,
    borderColor: 'aqua',
    borderWidth: 2,
    marginLeft: 30,
  },
  addWrapper: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'aqua',
    borderWidth: 2,
    margin: 12,
    marginRight: 30,
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
