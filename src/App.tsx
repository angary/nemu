import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import nfcManager from 'react-native-nfc-manager';
import AddCard from './components/AddCard';

import Card, {CardProps} from './components/Card';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  Keyboard.dismiss();
  const [hasNfc, setHasNfc] = useState(true);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const setCardsStored = async (newCards: CardProps[]) => {
    setCards(newCards);
    await AsyncStorage.setItem('cards', JSON.stringify(newCards));
  };

  // Check for NFC capabilities
  useEffect(() => {
    (async () => setHasNfc(await nfcManager.isSupported()))();
    (async () => {
      try {
        // await AsyncStorage.setItem('cards', JSON.stringify([]));
        const value = await AsyncStorage.getItem('cards');
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
            <Icon name="plus-square" style={[styles.title, styles.icon]} />
            {/* <Text style={[styles.title, styles.icon]}>+</Text> */}
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
                date={c.date}
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
            : 'Your device does not support NFC. Many app features will be unavailable'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
