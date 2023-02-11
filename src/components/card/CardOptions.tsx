import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../theme';

function CustomMenuOption(props: {onSelect?: () => any; children: any}) {
  return (
    <MenuOption
      customStyles={{
        optionWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      }}
      onSelect={props.onSelect}
      style={{
        backgroundColor: theme.colors.background,
        padding: theme.spacing.s,
      }}>
      {props.children}
    </MenuOption>
  );
}

const Divider = () => <View style={styles.divider} />;

export default function CardOptions(props: {
  delete?: () => void;
  edit?: () => void;
}) {
  const [opened, setOpened] = useState(false);
  return (
    <Menu
      renderer={renderers.ContextMenu}
      style={styles.optionsView}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}>
      <MenuTrigger>
        <Feather
          style={{
            fontSize: theme.fontSize.l,
            color: opened ? theme.colors.medium : theme.colors.bright,
          }}
          name="more-vertical"
        />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            marginTop: theme.spacing.l,
            marginLeft: theme.spacing.xs,
          },
        }}>
        <CustomMenuOption onSelect={props.edit}>
          <Text style={styles.editOption}>Edit</Text>
          <Feather name="edit" style={styles.editOption} />
        </CustomMenuOption>
        <Divider />
        <CustomMenuOption onSelect={props.delete}>
          <Text style={styles.deleteOption}>Delete</Text>
          <Feather name="x-square" style={styles.deleteOption} />
        </CustomMenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  optionsView: {
    marginLeft: 'auto',
    paddingHorizontal: theme.spacing.s,
    paddingTop: theme.spacing.s,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.medium,
  },
  editOption: {
    color: theme.colors.foreground,
    fontSize: theme.fontSize.m,
  },
  deleteOption: {
    color: theme.colors.danger,
    fontSize: theme.fontSize.m,
  },
});
