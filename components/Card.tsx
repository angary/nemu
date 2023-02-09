import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
      <MaterialIcons style={styles.icon} name="account-circle" />
      <View style={styles.cardContent}>
        <View style={styles.cardText}>
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
        <TouchableOpacity onPress={props.delete}>
          <SimpleLineIcons style={styles.options} name="options-vertical" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    marginHorizontal: theme.spacing.s,
  },
  icon: {
    fontSize: theme.fontSize.xl,
    paddingRight: theme.spacing.m,
    color: theme.colors.bright,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '100%',
  },
  cardText: {
    flex: 1,
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
    fontSize: theme.fontSize.m,
    color: theme.colors.bright,
    paddingRight: theme.spacing.s,
  },
});

export default Card;
