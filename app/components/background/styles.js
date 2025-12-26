import { StyleSheet } from 'react-native';
import theme from '../../themes/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },

    /* ---------- Content ---------- */
    content: {
        flex: 1,
        zIndex: 10,
    },

    /* ---------- Abstract Neon Shapes ---------- */

    neonCircleTop: {
        position: 'absolute',
        top: -120,
        left: -100,
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: theme.colors.neonViolet,
        shadowColor: theme.colors.primary,
        shadowOpacity: 0.9,
        shadowRadius: 40,
        elevation: 20,
    },

    neonCircleBottom: {
        position: 'absolute',
        bottom: -140,
        right: -120,
        width: 320,
        height: 320,
        borderRadius: 160,
        borderWidth: 2,
        borderColor: theme.colors.neonCyan,
        shadowColor: theme.colors.secondary,
        shadowOpacity: 0.9,
        shadowRadius: 40,
        elevation: 20,
    },

    neonArcRight: {
        position: 'absolute',
        top: '30%',
        right: -200,
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: theme.colors.neonBlue,
        shadowColor: theme.colors.neonBlue,
        shadowOpacity: 0.6,
        shadowRadius: 30,
        elevation: 15,
    },
});

export default styles;
