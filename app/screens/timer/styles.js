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

    /* ---------- Segmented Control (COPIED SYSTEM) ---------- */
    segment: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 14,
        marginBottom: 24,
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

    /* ---------- Time ---------- */
    time: {
        fontSize: 42,
        fontWeight: '600',
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: 24,
    },

    /* ---------- Controls ---------- */
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    bubble: {
        flex: 1,
        marginHorizontal: 6,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
    },

    primary: {
        backgroundColor: theme.colors.primary,
    },

    neutral: {
        backgroundColor: 'rgba(255,255,255,0.06)',
    },

    danger: {
        backgroundColor: theme.colors.dangerMuted,
    },

    bubbleText: {
        color: '#fff',
        fontWeight: '600',
    },

    bubblePressed: {
        transform: [{ scale: 0.97 }],
        opacity: 0.9,
    },

    /* ---------- Laps ---------- */
    laps: {
        marginTop: 10,
    },

    lapRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.06)',
    },

    lapText: {
        color: theme.colors.textSecondary,
    },

    lapTime: {
        color: theme.colors.textPrimary,
    },

    /* ---------- Timer Inputs ---------- */
    timerInputs: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },

    input: {
        width: 72,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 12,
        padding: 12,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },

    colon: {
        color: '#fff',
        fontSize: 22,
        marginHorizontal: 8,
        alignSelf: 'center',
    },

    pressed: {
        transform: [{ scale: 0.97 }],
    },
});
