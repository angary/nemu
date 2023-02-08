import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Keyboard,
  Modal,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import nfcManager from 'react-native-nfc-manager';
import AddCard from './components/AddCard';

import Card, {CardProps} from './components/Card';
import {styles} from './styles';

export default function App() {
  Keyboard.dismiss();
  const [hasNfc, setHasNfc] = useState(true);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const setCardsStored = async (newCards: CardProps[]) => {
    console.log(`setCardsStored, ${JSON.stringify(newCards, null, 4)}`);
    setCards(newCards);
    await AsyncStorage.setItem('cards', JSON.stringify(newCards));
  };

  // Check for NFC capabilities
  useEffect(() => {
    (async () => setHasNfc(await nfcManager.isSupported()))();
    (async () => {
      try {
        const value = await AsyncStorage.getItem('cards');
        console.log(`Getting stored cards: ${JSON.stringify(value, null, 4)}`);
        if (value !== null) {
          setCardsStored(JSON.parse(value));
        }
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  const deleteCard = (index: number) => {
    let copy = [...cards];
    copy.splice(index, 1);
    setCardsStored(copy);
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
          setCards={setCardsStored}
          cards={cards}
        />
      </Modal>

      {/* Content */}
      <ScrollView style={styles.items}>
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
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {hasNfc
            ? ''
            : 'Your device does not support NFC - many app features will be unavailable'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
