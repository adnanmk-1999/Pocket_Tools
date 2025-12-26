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

    time: {
        color: theme.colors.textPrimary,
        fontSize: 44,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 6,
    },

    zone: {
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: 24,
    },

    wrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 24,
    },

    zoneButton: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 14,
        marginRight: 8,
        marginBottom: 8,
    },

    zoneActive: {
        backgroundColor: 'rgba(108, 92, 231, 0.35)',
    },

    zoneText: {
        color: theme.colors.textPrimary,
        fontSize: 14,
        fontWeight: '500',
    },

    pressed: {
        transform: [{ scale: 0.97 }],
    },

    info: {
        color: theme.colors.textSecondary,
        fontSize: 12,
        textAlign: 'center',
        opacity: 0.7,
    },
});
