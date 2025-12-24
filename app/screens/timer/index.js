import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    ScrollView,
} from 'react-native';

/* ---------- Helpers ---------- */

const formatTime = (ms) => {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

/* ---------- Screen ---------- */

const TimerScreen = () => {
    const [mode, setMode] = useState('stopwatch'); // stopwatch | timer

    /* ---- Stopwatch State ---- */
    const [isRunning, setIsRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [laps, setLaps] = useState([]);

    const startRef = useRef(null);
    const intervalRef = useRef(null);

    /* ---- Timer State ---- */
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');
    const [remaining, setRemaining] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);

    /* ---------- Stopwatch Effect ---------- */
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

    /* ---------- Timer Effect ---------- */
    useEffect(() => {
        if (mode !== 'timer') return;

        if (!timerRunning || remaining <= 0) {
            clearInterval(intervalRef.current);
            return;
        }

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
    }, [timerRunning, remaining, mode]);

    /* ---------- Stopwatch Handlers ---------- */
    const toggleStopwatch = () => setIsRunning((p) => !p);

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsed(0);
        setLaps([]);
    };

    const addLap = () => {
        setLaps((prev) => [elapsed, ...prev]);
    };

    /* ---------- Timer Handlers ---------- */
    const startTimer = () => {
        const total =
            parseInt(minutes || '0', 10) * 60000 +
            parseInt(seconds || '0', 10) * 1000;

        if (total > 0) {
            setRemaining(total);
            setTimerRunning(true);
        }
    };

    const resetTimer = () => {
        setTimerRunning(false);
        setRemaining(0);
    };

    /* ---------- UI ---------- */
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Timer & Stopwatch</Text>

            {/* Mode Toggle */}
            <View style={styles.modeSwitch}>
                <Pressable
                    style={[
                        styles.modeButton,
                        mode === 'stopwatch' && styles.modeActive,
                    ]}
                    onPress={() => {
                        setMode('stopwatch');
                        resetTimer();
                    }}
                >
                    <Text style={styles.modeText}>Stopwatch</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.modeButton,
                        mode === 'timer' && styles.modeActive,
                    ]}
                    onPress={() => {
                        setMode('timer');
                        resetStopwatch();
                    }}
                >
                    <Text style={styles.modeText}>Timer</Text>
                </Pressable>
            </View>

            {/* Stopwatch */}
            {mode === 'stopwatch' && (
                <>
                    <Text style={styles.time}>
                        {formatTime(elapsed)}
                    </Text>

                    <View style={styles.controls}>
                        <Pressable
                            style={[
                                styles.button,
                                isRunning ? styles.pause : styles.start,
                            ]}
                            onPress={toggleStopwatch}
                        >
                            <Text style={styles.buttonText}>
                                {isRunning ? 'Pause' : 'Start'}
                            </Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.lap]}
                            disabled={!isRunning}
                            onPress={addLap}
                        >
                            <Text style={styles.buttonText}>Lap</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.reset]}
                            onPress={resetStopwatch}
                        >
                            <Text style={styles.buttonText}>Reset</Text>
                        </Pressable>
                    </View>

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
                </>
            )}

            {/* Timer */}
            {mode === 'timer' && (
                <>
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

                    <Text style={styles.time}>
                        {formatTime(remaining)}
                    </Text>

                    <View style={styles.controls}>
                        <Pressable
                            style={[styles.button, styles.start]}
                            onPress={startTimer}
                        >
                            <Text style={styles.buttonText}>Start</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.reset]}
                            onPress={resetTimer}
                        >
                            <Text style={styles.buttonText}>Reset</Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
};

export default TimerScreen;

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
    modeSwitch: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    modeButton: {
        flex: 1,
        padding: 12,
        backgroundColor: '#111',
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    modeActive: {
        backgroundColor: '#333',
    },
    modeText: {
        color: '#fff',
        fontWeight: '500',
    },
    time: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 20,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    start: {
        backgroundColor: '#1e90ff',
    },
    pause: {
        backgroundColor: '#ff8c00',
    },
    lap: {
        backgroundColor: '#333',
    },
    reset: {
        backgroundColor: '#aa3333',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    laps: {
        marginTop: 10,
    },
    lapRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    },
    lapText: {
        color: '#aaa',
    },
    lapTime: {
        color: '#fff',
    },
    timerInputs: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    input: {
        width: 70,
        backgroundColor: '#111',
        borderRadius: 8,
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
});
