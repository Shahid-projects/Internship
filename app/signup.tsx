import { View, TextInput, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import MyButton from '@/app-example/components/MyButton'

const SignUp = () => {
    const router = useRouter()
    const onSignup = () => {
        router.navigate("/login")
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require("@/assets/images/Signup.jpg")}
                        style={{ width: "100%", height: 600 }}
                        resizeMode="cover"
                    />

                    <View style={{ padding: 20, gap: 20 }}>
                        <TextInput
                            placeholder="Enter Your Name"
                            style={{
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderRadius: 20,
                                height: 50
                            }}
                            onChangeText={(e) => console.log(e)}
                        />

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

                        <TextInput
                            placeholder="Re-Enter Your Password"
                            style={{
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderRadius: 20,
                                height: 50
                            }}
                            onChangeText={(e) => console.log(e)}
                        />

                        <MyButton title="Register" onpress={onSignup} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUp
