import { StyleSheet } from 'react-native';
import theme from '../../themes';

export default StyleSheet.create({
    content: {
        padding: 20,
        paddingBottom: 40,
    },

    helperText: {
        color: theme.colors.textSecondary,
        fontSize: 14,
        marginBottom: 12,
        marginTop: 16,
    },

    warning: {
        color: '#FFCC00',
        fontSize: 13,
        marginBottom: 12,
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

    /* ---------- Selection ---------- */
    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },

    pill: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 14,
        paddingVertical: 12,
        alignItems: 'center',
        marginRight: 8,
    },

    pillText: {
        color: theme.colors.textPrimary,
        fontWeight: '600',
    },

    sectionTitle: {
        color: theme.colors.textSecondary,
        marginBottom: 8,
    },

    wrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
    },

    /* ---------- Currency Bubbles ---------- */
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 14,
        marginRight: 8,
        marginBottom: 8,
    },

    bubbleActive: {
        backgroundColor: 'rgba(108, 92, 231, 0.35)',
    },

    bubbleText: {
        color: theme.colors.textPrimary,
        fontWeight: '500',
    },

    bubblePressed: {
        transform: [{ scale: 0.97 }],
        opacity: 0.9,
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

    resultValue: {
        fontSize: 32,
        fontWeight: '700',
        color: theme.colors.textPrimary,
    },

    resultUnit: {
        color: theme.colors.textSecondary,
        marginTop: 4,
    },
    exchangeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },

    arrow: {
        color: theme.colors.primary,
        fontSize: 22,
        fontWeight: '700',
        marginHorizontal: 10,
    },
});
