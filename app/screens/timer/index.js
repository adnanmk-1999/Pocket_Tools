import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Pressable,
    TextInput,
    ScrollView,
} from 'react-native';

import Screen from '../../screens';
import styles from './styles';

/* ---------- Helpers ---------- */
const formatTime = (ms) => {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const TimerScreen = () => {
    const [mode, setMode] = useState('stopwatch');

    const [isRunning, setIsRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [laps, setLaps] = useState([]);

    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');
    const [remaining, setRemaining] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);

    const startRef = useRef(null);
    const intervalRef = useRef(null);

    /* ---------- Stopwatch ---------- */
    useEffect(() => {
        if (mode !== 'stopwatch') return;

        if (isRunning) {
            startRef.current = Date.now() - elapsed;
            intervalRef.current = setInterval(() => {
                setElapsed(Date.now() - startRef.current);
            }, 50);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, mode]);

    /* ---------- Timer ---------- */
    useEffect(() => {
        if (mode !== 'timer' || !timerRunning) return;

        intervalRef.current = setInterval(() => {
            setRemaining((prev) => {
                if (prev <= 1000) {
                    clearInterval(intervalRef.current);
                    setTimerRunning(false);
                    return 0;
                }
                return prev - 1000;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [timerRunning, mode]);

    const startTimer = () => {
        const total =
            parseInt(minutes || '0', 10) * 60000 +
            parseInt(seconds || '0', 10) * 1000;

        if (total > 0) {
            setRemaining(total);
            setTimerRunning(true);
        }
    };

    const resetAll = () => {
        setIsRunning(false);
        setTimerRunning(false);
        setElapsed(0);
        setRemaining(0);
        setLaps([]);
    };

    return (
        <Screen>
            <View style={styles.container}>

                {/* ---------- Helper ---------- */}
                <Text style={styles.helperText}>
                    Choose a mode and control time.
                </Text>

                {/* ---------- Tabs (MATCH UNIT CONVERTER) ---------- */}
                <View style={styles.segment}>
                    {['stopwatch', 'timer'].map((type) => (
                        <Pressable
                            key={type}
                            onPress={() => {
                                setMode(type);
                                resetAll();
                            }}
                            style={({ pressed }) => [
                                styles.segmentButton,
                                mode === type && styles.segmentActive,
                                pressed && styles.pressed,
                            ]}
                        >
                            <Text style={styles.segmentText}>
                                {type === 'stopwatch' ? 'Stopwatch' : 'Timer'}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                {/* ---------- Time ---------- */}
                <Text style={styles.time}>
                    {mode === 'stopwatch'
                        ? formatTime(elapsed)
                        : formatTime(remaining)}
                </Text>

                {/* ---------- Controls (Bubble Style) ---------- */}
                <View style={styles.controls}>

                    {/* Start / Pause */}
                    <Pressable
                        onPress={
                            mode === 'stopwatch'
                                ? () => setIsRunning((p) => !p)
                                : startTimer
                        }
                        style={({ pressed }) => [
                            styles.bubble,
                            styles.primary,
                            pressed && styles.bubblePressed,
                        ]}
                    >
                        <Text style={styles.bubbleText}>
                            {mode === 'stopwatch'
                                ? isRunning ? 'Pause' : 'Start'
                                : 'Start'}
                        </Text>
                    </Pressable>

                    {/* Lap */}
                    {mode === 'stopwatch' && (
                        <Pressable
                            disabled={!isRunning}
                            onPress={() => setLaps((p) => [elapsed, ...p])}
                            style={({ pressed }) => [
                                styles.bubble,
                                styles.neutral,
                                pressed && styles.bubblePressed,
                            ]}
                        >
                            <Text style={styles.bubbleText}>Lap</Text>
                        </Pressable>
                    )}

                    {/* Reset */}
                    <Pressable
                        onPress={resetAll}
                        style={({ pressed }) => [
                            styles.bubble,
                            styles.danger,
                            pressed && styles.bubblePressed,
                        ]}
                    >
                        <Text style={styles.bubbleText}>Reset</Text>
                    </Pressable>

                </View>

                {/* ---------- Laps ---------- */}
                {mode === 'stopwatch' && (
                    <ScrollView style={styles.laps}>
                        {laps.map((lap, i) => (
                            <View key={i} style={styles.lapRow}>
                                <Text style={styles.lapText}>
                                    Lap {laps.length - i}
                                </Text>
                                <Text style={styles.lapTime}>
                                    {formatTime(lap)}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                )}

                {/* ---------- Timer Inputs ---------- */}
                {mode === 'timer' && (
                    <View style={styles.timerInputs}>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={minutes}
                            onChangeText={setMinutes}
                            placeholder="MM"
                            placeholderTextColor="#666"
                        />
                        <Text style={styles.colon}>:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={seconds}
                            onChangeText={setSeconds}
                            placeholder="SS"
                            placeholderTextColor="#666"
                        />
                    </View>
                )}

            </View>
        </Screen>
    );
};

export default TimerScreen;
