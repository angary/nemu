import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardOptions from './CardOptions';

// Note that the following card props have to be serialisable as a JSON string
export type CardProps = {
  name: string;
  description: string;
  date: string;
  delete?: () => void;
};

export default function Card(props: CardProps) {
  return (
    <View style={styles.card}>
      <MaterialIcons style={styles.icon} name="account-circle" />
      {/* Text and Options */}
      <View style={styles.cardContent}>
        {/* Text */}
        <View style={styles.cardText}>
          <View style={styles.header}>
            <Text style={styles.nameText}>{props.name}</Text>
            <Text style={styles.dateText}>{` \u2022 ${props.date}`}</Text>
          </View>
          <Text style={styles.description}>{props.description}</Text>
        </View>
        {/* Options Button */}
        <CardOptions delete={props.delete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    marginHorizontal: theme.spacing.s,
  },
  icon: {
    fontSize: theme.fontSize.xxl,
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
    justifyContent: 'flex-start',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.m,
    color: theme.colors.foreground,
    maxWidth: '80%',
  },
  dateText: {
    color: theme.colors.medium,
    fontSize: theme.fontSize.s,
  },
  description: {
    color: theme.colors.bright,
    fontSize: theme.fontSize.m,
  },
});
