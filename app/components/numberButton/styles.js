import { StyleSheet } from 'react-native';
import theme from '../../themes';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  /* ---------- BASE BUTTON ---------- */
  baseButton: {
    flex: 1,
    height: 56,
    margin: 6,
    borderRadius: 16, // 👈 consistent bubble radius
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.06)',
  },

  defaultButton: {},

  /* ---------- TEXT ---------- */
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.colors.textPrimary,
  },

  /* ---------- DELETE (FADED RED) ---------- */
  deleteButton: {
    backgroundColor: 'rgba(255, 90, 90, 0.18)',
  },
  deleteText: {
    color: '#ff6b6b',
    fontWeight: '600',
    fontSize: 18,
  },

  /* ---------- EQUAL (PRIMARY NEON) ---------- */
  equalButton: {
    backgroundColor: theme.colors.primary,
  },
  equalText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  /* ---------- PRESS EFFECT (THE KEY FIX) ---------- */
  pressed: {
    transform: [{ scale: 0.95 }],
    backgroundColor: 'rgba(108, 92, 231, 0.35)', // 👈 neon-tinted overlay
  },
});
