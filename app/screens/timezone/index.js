import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';

/* ---------- Supported Clocks ---------- */
const ZONES = [
    { label: 'Local Time', offset: null },
    { label: 'UTC', offset: 0 },
    { label: 'UTC +1 (Berlin Winter)', offset: 60 },
    { label: 'UTC +2 (Berlin Summer)', offset: 120 },
    { label: 'UTC +5:30 (India)', offset: 330 },
    { label: 'UTC -5 (New York)', offset: -300 },
    { label: 'UTC -8 (Los Angeles)', offset: -480 },
    { label: 'UTC +9 (Tokyo)', offset: 540 },
    { label: 'UTC +10 (Sydney)', offset: 600 },
];

/* ---------- Helpers ---------- */
const formatTime = (date) =>
    date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

const applyOffset = (date, minutes) =>
    new Date(date.getTime() + minutes * 60000);

/* ---------- Screen ---------- */
const TimezoneClock = () => {
    const [now, setNow] = useState(new Date());
    const [zone, setZone] = useState(ZONES[0]);

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const displayTime =
        zone.offset === null ? now : applyOffset(now, zone.offset);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>World Clock</Text>

            <Text style={styles.time}>
                {formatTime(displayTime)}
            </Text>

            <Text style={styles.zone}>
                {zone.label}
            </Text>

            <View style={styles.list}>
                {ZONES.map((z) => (
                    <Pressable
                        key={z.label}
                        style={[
                            styles.button,
                            z.label === zone.label && styles.active,
                        ]}
                        onPress={() => setZone(z)}
                    >
                        <Text style={styles.text}>{z.label}</Text>
                    </Pressable>
                ))}
            </View>

            <Text style={styles.info}>
                Uses device clock. Fixed offsets are shown where full timezone
                support is not available on all devices.
            </Text>
        </View>
    );
};

export default TimezoneClock;

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
    },
    time: {
        color: '#fff',
        fontSize: 42,
        fontWeight: '600',
        textAlign: 'center',
    },
    zone: {
        color: '#aaa',
        textAlign: 'center',
        marginBottom: 20,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        backgroundColor: '#111',
        padding: 10,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8,
    },
    active: {
        backgroundColor: '#333',
    },
    text: {
        color: '#fff',
    },
    info: {
        color: '#666',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    },
});
