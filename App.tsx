import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Keyboard,
  Modal,
  SafeAreaView,
} from 'react-native';
import AddCard from './components/AddCard';

import Card, {CardProps} from './components/Card';
import {styles} from './styles';

export default function App() {
  Keyboard.dismiss();
  const [cards, setCards] = useState<CardProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const deleteCard = (index: number) => {
    let copy = [...cards];
    copy.splice(index, 1);
    setCards(copy);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>nemu</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {/* TODO: Turn this into icon */}
            <Text style={[styles.title, styles.icon]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add a new card */}
      <Modal visible={modalVisible} animationType="slide">
        <AddCard
          setModalVisible={setModalVisible}
          setCards={setCards}
          cards={cards}
        />
      </Modal>

      {/* Content */}
      <View style={styles.items}>
        {cards.map((c, i) => {
          return (
            <View key={i}>
              <Card
                name={c.name}
                description={c.description}
                delete={() => deleteCard(i)}
              />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
