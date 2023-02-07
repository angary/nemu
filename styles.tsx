import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderColor: 'silver',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
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
  writeCardWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 12,
    width: 250,
    borderColor: 'aqua',
    borderWidth: 2,
    marginLeft: 30,
  },
  addWrapper: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'aqua',
    borderWidth: 2,
    margin: 12,
    marginRight: 30,
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  modalInput: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'silver',
    fontSize: 16,
  },
});
