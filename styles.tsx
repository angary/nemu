import {StyleSheet} from 'react-native';
import {theme} from './theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    flexDirection: 'row',
  },
  title: {
    fontSize: theme.fontSize.l,
    fontVariant: ['small-caps'],
    color: theme.colors.foreground,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  icon: {
    paddingHorizontal: 6,
  },
  items: {
    paddingTop: 5,
  },
  modalInput: {
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.s,
    marginHorizontal: theme.spacing.l,
    borderBottomColor: theme.colors.medium,
    borderBottomWidth: 1,
    fontSize: theme.fontSize.m,
    color: theme.colors.foreground,
  },
  modalButton: {
    width: 50,
    margin: theme.spacing.l,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center',
  },
  modalButtonText: {
    textAlign: 'center',
    fontSize: theme.fontSize.m,
    color: theme.colors.foreground,
  },
});
