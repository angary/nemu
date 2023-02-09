import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import nfcManager, {NfcEvents} from 'react-native-nfc-manager';
import {styles} from '../styles';
import {CardProps} from './Card';

import Icon from 'react-native-vector-icons/Feather';

type AddCardProps = {
  setModalVisible: (_: boolean) => void;
  setCards: (_: CardProps[]) => unknown;
  cards: CardProps[];
};

export default function AddCard(props: AddCardProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // TODO: Implement NFC scanning
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scanNfc = async () => {
    nfcManager.setEventListener(NfcEvents.DiscoverTag, (tag: unknown) => {
      console.warn('tag found', tag);
    });
    await nfcManager.registerTagEvent();
  };

  const validInputs = (): boolean => {
    if (!name.trim()) {
      Alert.alert('Please have a non empty name!');
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validInputs()) {
      props.setCards([
        {name, description, date: new Date().toLocaleDateString('en-GB')},
        ...props.cards,
      ]);
      props.setModalVisible(false);
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>add card</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => props.setModalVisible(false)}>
            <Icon name="x-square" style={[styles.title, styles.icon]} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="enter name"
        style={styles.modalInput}
        onChangeText={setName}
        autoFocus={true}
      />
      <TextInput
        placeholder="enter description (optional)"
        style={styles.modalInput}
        onChangeText={setDescription}
      />
      <Pressable onPress={submit} style={styles.modalButton}>
        <Text style={styles.modalButtonText}>Add</Text>
      </Pressable>
    </SafeAreaView>
  );
}
