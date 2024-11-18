import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; // Toast library
import { String } from '../Constant/Constant';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignIn = () => {
        if (!email || !password) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Please enter both email and password.',
            });
            return;
        }
        if (!validateEmail(email)) {
            Toast.show({
                type: 'error',
                text1: 'Invalid Email',
                text2: 'Please enter a valid email address.',
            });
            return;
        }
        if (!isChecked) {
            Toast.show({
                type: 'info',
                text1: 'Terms & Conditions',
                text2: 'Please agree to the terms and conditions.',
            });
            return;
        }
        // Successful Login
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'You have logged in successfully!',
        });
        navigation.navigate("Home");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.container}>
                        <Image source={require('../Assets/logo.png')} style={styles.logo} />
                        <Image source={require('../Assets/img.png')} style={styles.centerImage} />
                        <View style={styles.card}>
                            <Text style={styles.signInText}>{String.singin}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter email or username"
                                value={email}
                                placeholderTextColor={'grey'}
                                onChangeText={setEmail}
                            />
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    secureTextEntry={!isPasswordVisible}
                                    value={password}
                                    placeholderTextColor={'grey'}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    style={styles.eyeIcon}
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                >
                                    <Image
                                        source={
                                            isPasswordVisible
                                                ? require('../Assets/eyeopen.jpeg')
                                                : require('../Assets/eye.png')
                                        }
                                        style={{ height: 30, width: 30 }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.forgotPassword}>{String.forgotPassword}</Text>
                            </TouchableOpacity>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isChecked}
                                    onValueChange={setIsChecked}
                                    boxType="square"
                                    tintColors={{ true: '#007BFF', false: '#ddd' }}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>
                                    By signing up, you agree to our{' '}
                                    <Text style={{ color: '#007BFF' }}>terms of services</Text> and{' '}
                                    <Text style={{ color: '#007BFF' }}>privacy policy</Text>
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                                <Text style={styles.signInButtonText}>{String.singin}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <Toast />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        width: 120,
        height: 70,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 20,
    },
    centerImage: {
        width: '90%',
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 20,
    },
    card: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 55,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        top: 12,
    },
    forgotPassword: {
        color: '#007BFF',
        alignSelf: 'flex-end',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 5,
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    label: {
        fontSize: 15,
        width: '90%',
    },
    signInButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    signInButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Login;
