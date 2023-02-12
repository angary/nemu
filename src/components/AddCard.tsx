import React, {useState} from 'react';
import {
  Alert,
  Button,
  Keyboard,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import NfcManager, {NfcEvents, NfcTech} from 'react-native-nfc-manager';
import {styles} from '../styles';
import {CardProps} from './card/Card';

import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import {theme} from '../theme';

type AddCardProps = {
  setModalVisible: (_: boolean) => void;
  setCards: (_: CardProps[]) => unknown;
  cards: CardProps[];
};

export default function AddCard(props: AddCardProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // TODO: Implement NFC scanning
  const scanNfc = async () => {
    try {
      const supported = await NfcManager.isSupported();
      const nfcScanning = await NfcManager.isEnabled();
      if (supported && nfcScanning) {
        await NfcManager.start();
        const [tech, cmd] =
          Platform.OS === 'ios'
            ? [NfcTech.MifareIOS, NfcManager.sendMifareCommandIOS]
            : [NfcTech.NfcA, NfcManager.transceive];
        let response: any = await NfcManager.requestTechnology(tech, {
          alertMessage: 'Ready to scan',
        });
        response = await cmd([0x3a, 4, 4]);
        const payLoadLength = parseInt(response?.toString().split(',')[1], 10);
        const payLoadPages = Math.ceil(payLoadLength / 4);
        const startPage = 5;
        const endPage = startPage + payLoadPages - 1;
        response = await cmd([0x3a, startPage, endPage]);
      }
    } catch (error) {
      NfcManager.cancelTechnologyRequest();
      console.log(error);
      Alert.alert('Error scanning NFC', error.toString());
    }
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
        {name, description, date: moment().format('DD/MM/YY')},
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
      <TouchableOpacity>
        <Pressable onPress={scanNfc} style={styles.scanButton}>
          <Text style={styles.scanButtonText}>scan nfc</Text>
        </Pressable>
      </TouchableOpacity>
      <TextInput
        placeholder="name"
        placeholderTextColor={theme.colors.medium}
        style={styles.modalInput}
        onChangeText={setName}
        autoFocus={true}
      />
      <TextInput
        placeholder="description (optional)"
        placeholderTextColor={theme.colors.medium}
        style={styles.modalInput}
        onChangeText={setDescription}
      />
      <Pressable onPress={submit} style={styles.modalButton}>
        <Text style={styles.modalButtonText}>add</Text>
      </Pressable>
    </SafeAreaView>
  );
}
