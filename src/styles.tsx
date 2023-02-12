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
    fontSize: theme.fontSize.xl,
  },
  icon: {
    fontSize: theme.fontSize.xl,
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
    textAlign: 'center',
  },
  scanButton: {
    marginHorizontal: theme.spacing.l,
    alignContent: 'center',
    color: theme.colors.medium,
    padding: theme.spacing.s,
    borderColor: theme.colors.medium,
    borderWidth: 1,
    borderRadius: theme.spacing.m,
  },
  scanButtonText: {
    textAlign: 'center',
    fontSize: theme.fontSize.m,
    color: theme.colors.medium,
  },
  modalButton: {
    margin: theme.spacing.l,
    alignContent: 'center',
    padding: theme.spacing.s,
    backgroundColor: theme.colors.dark,
    borderRadius: theme.spacing.m,
  },
  modalButtonText: {
    textAlign: 'center',
    fontSize: theme.fontSize.m,
    color: theme.colors.bright,
  },
  footer: {
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
  },
  footerText: {
    fontSize: theme.fontSize.s,
    color: theme.colors.medium,
    textAlign: 'center',
  },
});
