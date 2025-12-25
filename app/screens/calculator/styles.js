import { StyleSheet } from 'react-native';
import theme from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  /* ---------- Display ---------- */
  displayContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: 'flex-end',
  },

  outputText: {
    fontSize: 38,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },

  /* ---------- Bottom Stack ---------- */
  bottomStack: {
    flex: 1,
    justifyContent: 'flex-end', // 👈 push history + keypad to bottom
  },

  /* ---------- History ---------- */
  historyContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 8,

    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  },

  /* ---------- Keypad ---------- */
  keypadContainer: {
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 20,

    backgroundColor: 'rgba(17, 24, 39, 0.65)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
  },
});
