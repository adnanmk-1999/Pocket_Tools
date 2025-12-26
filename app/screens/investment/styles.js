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
        marginTop: 16,
        marginBottom: 20,
    },

    sectionTitle: {
        color: theme.colors.textSecondary,
        marginBottom: 8,
    },

    /* ---------- Cards ---------- */
    card: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 14,
        padding: 14,
        marginBottom: 14,
    },

    input: {
        color: theme.colors.textPrimary,
        fontSize: 16,
    },

    /* ---------- Segmented ---------- */
    segment: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 14,
        marginBottom: 20,
    },

    segmentButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 14,
    },

    segmentActive: {
        backgroundColor: theme.colors.primary,
    },

    segmentText: {
        color: theme.colors.textPrimary,
        fontWeight: '600',
    },

    /* ---------- Calculate ---------- */
    calculateButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 10,
    },

    calculateText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },

    calculatePressed: {
        transform: [{ scale: 0.97 }],
        opacity: 0.95,
    },

    /* ---------- Result ---------- */
    resultCard: {
        marginTop: 24,
        padding: 16,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.06)',
        alignItems: 'center',
    },

    resultLabel: {
        color: theme.colors.textSecondary,
        fontSize: 14,
        marginBottom: 6,
    },

    resultValue: {
        color: theme.colors.textPrimary,
        fontSize: 26,
        fontWeight: '700',
    },

    /* ---------- Misc ---------- */
    disclaimer: {
        color: theme.colors.textSecondary,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
        opacity: 0.7,
    },

    pressed: {
        transform: [{ scale: 0.97 }],
    },
});
