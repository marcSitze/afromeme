import { StyleSheet } from 'react-native';
import { height } from '../../constants/layout';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.light.primary,
    borderRadius: 6,
    width: '100%'
  }
});

export default styles;