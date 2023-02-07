import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {styles} from '../styles';
import {CardProps} from './Card';

type AddCardProps = {
  setModalVisible: (_: boolean) => void;
  setCards: any;
  cards: CardProps[];
};

export default function AddCard(props: AddCardProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const validInputs = (): boolean => {
    if (!name.trim()) {
      Alert.alert('Please have a non empty name!');
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validInputs()) {
      props.setCards([{name, description}, ...props.cards]);
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
            <Text style={[styles.title, styles.icon]}>x</Text>
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
