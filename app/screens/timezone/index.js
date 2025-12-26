import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Pressable,
} from 'react-native';

import Screen from '../../screens';
import styles from './styles';

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

/* Convert local time → UTC */
const toUTC = (date) =>
    new Date(date.getTime() + date.getTimezoneOffset() * 60000);

/* Apply fixed offset (minutes) to a UTC date */
const applyOffset = (date, minutes) =>
    new Date(date.getTime() + minutes * 60000);

/* Format time consistently */
const formatTime = (date) =>
    date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

/* ---------- Screen ---------- */
const WorldClock = () => {
    const [now, setNow] = useState(new Date());
    const [zone, setZone] = useState(ZONES[0]);

    /* Tick every second */
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    /* Compute displayed time */
    const displayTime = (() => {
        if (zone.offset === null) {
            // Local time (device timezone)
            return now;
        }

        // Always normalize to UTC first
        const utc = toUTC(now);
        return applyOffset(utc, zone.offset);
    })();

    return (
        <Screen>
            <View style={styles.container}>

                {/* Helper text */}
                <Text style={styles.helperText}>
                    Select a timezone to view current time.
                </Text>

                {/* Time */}
                <Text style={styles.time}>
                    {formatTime(displayTime)}
                </Text>

                <Text style={styles.zone}>
                    {zone.label}
                </Text>

                {/* Timezone selection */}
                <View style={styles.wrap}>
                    {ZONES.map((z) => (
                        <Pressable
                            key={z.label}
                            onPress={() => setZone(z)}
                            style={({ pressed }) => [
                                styles.zoneButton,
                                z.label === zone.label && styles.zoneActive,
                                pressed && styles.pressed,
                            ]}
                        >
                            <Text style={styles.zoneText}>{z.label}</Text>
                        </Pressable>
                    ))}
                </View>

                <Text style={styles.info}>
                    Uses device clock. Fixed offsets are shown where full timezone
                    support is not available on all devices.
                </Text>

            </View>
        </Screen>
    );
};

export default WorldClock;
