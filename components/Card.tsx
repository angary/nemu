import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../theme';

// Note that the following card props have to be serialisable as a JSON string
export type CardProps = {
  name: string;
  description: string;
  date: string;
  delete?: () => void;
};

const Card = (props: CardProps) => {
  console.log(props);
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <View>
          <View style={styles.header}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.date}>
              {' '}
              {'\u2022'}
              {` ${props.date}`}
            </Text>
          </View>
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.m,
    color: theme.colors.foreground,
  },
  date: {
    color: theme.colors.medium,
    fontSize: theme.fontSize.s,
  },
  description: {
    color: theme.colors.bright,
    fontSize: theme.fontSize.m,
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
