import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export type CardProps = {
  name: string;
  description: string;
};

const Card = (props: CardProps) => {
  console.log(props);
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.options} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginHorizontal: 12,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  name: {
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  options: {
    width: 16,
    height: 16,
    borderColor: 'aqua',
    borderWidth: 2,
  },
});

export default Card;
