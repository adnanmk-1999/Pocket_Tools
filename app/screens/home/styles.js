import { StyleSheet } from 'react-native';
import theme from '../../themes/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 32,
    color: theme.colors.textPrimary,
    fontWeight: '700',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: 28,
  },

  scrollContent: {
    flexGrow: 1,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  tile: {
    width: '47%',
    borderRadius: 18,
    backgroundColor: 'rgba(17, 24, 39, 0.55)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
    paddingVertical: 22,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10,
  },

  icon: {
    width: 46,
    height: 46,
    marginBottom: 12,
  },

  tileText: {
    color: theme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
