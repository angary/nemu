import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Keyboard,
  Modal,
  TextInput,
  Button,
} from 'react-native';

import Card, {CardProps} from './components/Card';

export default function App() {
  Keyboard.dismiss();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cards, setCards]: [CardProps[], any] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const removeCard = (index: number) => {
    let copy = [...cards];
    copy.splice(index, 1);
    setCards(copy);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>nemu</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={[styles.title, styles.icon]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* TODO: Move this into a header */}
      {/* Add a new card */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          {/* Add new card header */}
          <View style={styles.header}>
            <Text style={styles.title}>add card</Text>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={[styles.title, styles.icon]}>x</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TODO: Prv */}
          {/* Add new card form */}
          <TextInput
            placeholder="enter name"
            style={styles.modalInput}
            onChangeText={setName}
          />
          <TextInput
            placeholder="enter description"
            style={styles.modalInput}
            onChangeText={setDescription}
          />
          <Button
            title="add"
            onPress={() => {
              setCards([{name, description}, ...cards]);
              setModalVisible(false);
              Keyboard.dismiss();
            }}
          />
        </View>
      </Modal>

      {/* Content */}
      <View style={styles.items}>
        {cards.map((c, i) => {
          return (
            <TouchableOpacity onPress={() => removeCard(i)}>
              <Card key={i} name={c.name} description={c.description} />
            </TouchableOpacity>
          );
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
  modal: {
    backgroundColor: 'white',
  },
  modalInput: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'silver',
    fontSize: 16,
  },
});
