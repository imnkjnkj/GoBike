import { StyleSheet } from 'react-native';

import { Text, View } from '../components/shared/Themed';
import { MenuHeader } from '../components/MenuHeader';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <MenuHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
