import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../theme';

export type CardProps = {
  name: string;
  description: string;
  delete?: () => void;
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
      <TouchableOpacity style={styles.options} onPress={props.delete} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.s,
    marginHorizontal: theme.spacing.s,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.m,
    color: theme.colors.foreground,
  },
  description: {
    color: theme.colors.medium,
    fontSize: theme.fontSize.s,
  },
  options: {
    width: 16,
    height: 16,
    borderColor: theme.colors.medium,
    borderWidth: 1,
    marginRight: theme.spacing.s,
  },
});

export default Card;
