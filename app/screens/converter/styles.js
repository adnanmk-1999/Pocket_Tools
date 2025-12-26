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
        marginBottom: 16,
        marginTop: 16,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        color: theme.colors.textPrimary,
        marginBottom: 20,
    },

    /* ---------- Segmented Control ---------- */
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

    /* ---------- Cards ---------- */
    card: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 14,
        padding: 14,
        marginBottom: 20,
    },

    input: {
        color: theme.colors.textPrimary,
        fontSize: 16,
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

    unitButton: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 12,
        marginRight: 8,
        marginBottom: 8,
    },

    unitButtonActive: {
        backgroundColor: 'rgba(108, 92, 231, 0.35)',
    },

    unitText: {
        color: theme.colors.textPrimary,
        fontSize: 14,
    },

    /* ---------- Convert ---------- */
    convertButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 10,
    },

    convertText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },

    convertPressed: {
        transform: [{ scale: 0.97 }],
        opacity: 0.95,
    },

    /* ---------- Result ---------- */
    resultCard: {
        marginTop: 20,
        padding: 16,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.06)',
        alignItems: 'center',
    },

    resultText: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.colors.textPrimary,
    },

    /* ---------- Press ---------- */
    pressed: {
        transform: [{ scale: 0.97 }],
    },
});
