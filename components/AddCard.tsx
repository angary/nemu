import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Keyboard,
  Alert,
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
    } else if (!description.trim()) {
      Alert.alert('Please have a non empty description!');
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
    <View>
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
      />
      <TextInput
        placeholder="enter description"
        style={styles.modalInput}
        onChangeText={setDescription}
      />
      <Button title="add" onPress={submit} />
    </View>
  );
}
