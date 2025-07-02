import { View, Text, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter()
    const onLogin = () => {
        router.navigate("/")
    }
    const onSignup = () => {
        router.navigate("/signup")
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}

        >

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require("@/assets/images/login.jpg")}
                    style={{
                        width: "100%",
                        height: 600
                    }}
                    resizeMode='cover'
                />
                <View style={{ padding: 20, gap: 20 }}>
                    <TextInput
                        placeholder="Enter Your Email"
                        style={{
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderRadius: 20,
                            height: 50
                        }}
                        onChangeText={(e) => console.log(e)}
                    />
                    <TextInput
                        placeholder="Enter Your Password"
                        style={{
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderRadius: 20,
                            height: 50
                        }}
                        onChangeText={(e) => console.log(e)}
                    />
                    <MyButton title={"login"} onpress={onLogin} />
                    <MyButton title={"signup"} onpress={onSignup} />
                </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login
