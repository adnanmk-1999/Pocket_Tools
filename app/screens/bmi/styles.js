import { StyleSheet } from 'react-native';
import theme from '../../themes';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    helperText: {
        color: theme.colors.textSecondary,
        fontSize: 14,
        marginBottom: 20,
        marginTop: 16,
    },

    /* ---------- Cards ---------- */
    card: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 14,
        padding: 14,
        marginBottom: 16,
    },

    input: {
        color: theme.colors.textPrimary,
        fontSize: 16,
    },

    /* ---------- Button ---------- */
    primaryButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },

    buttonPressed: {
        transform: [{ scale: 0.97 }],
        opacity: 0.95,
    },

    /* ---------- Result ---------- */
    resultCard: {
        marginTop: 24,
        padding: 18,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.06)',
        alignItems: 'center',
    },

    bmiValue: {
        color: theme.colors.textPrimary,
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 6,
    },

    category: {
        color: theme.colors.textSecondary,
        fontSize: 16,
    },
});
