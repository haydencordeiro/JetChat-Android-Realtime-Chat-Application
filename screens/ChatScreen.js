import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, ScrollView, TextInput, Keyboard } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, SimpleLineIcons, Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as firebase from "firebase"
import { auth, db } from '../firebase'

const ChatScreen = ({ navigation, route }) => {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => <View
                style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <Avatar rounded
                    source={{ uri: route.params.chatImg }}
                />
                <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
                    {route.params.displayName}
                </Text>
            </View>,
            // headerLeft:()=>(
            //     <TouchableOpacity
            //     style={{marginLeft:10}}
            //     onPress={navigation.goBack}
            //     >
            //         <AntDesign name="arrowleft" size={24} color="white"></AntDesign>
            //     </TouchableOpacity>
            // )
        })
    }, [navigation])

    const sendMessage = async () => {

        Keyboard.dismiss();

        // add to messages collection
        await db.collection(auth.currentUser.email).doc(route.params.id).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp() || null,
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
        })

        await db.collection(route.params.id).doc(auth.currentUser.email).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp() || null,
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
        })
        // add last chat
        await db.collection(route.params.id).doc(auth.currentUser.email).update({
            timestamp: firebase.firestore.FieldValue.serverTimestamp() || null,
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            seen: false,
            notify: false
        })

        await db.collection(auth.currentUser.email).doc(route.params.id).update({
            timestamp: firebase.firestore.FieldValue.serverTimestamp() || null,
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            seen: true,
            notify: false
        })

        setInput("")

    }
    useLayoutEffect(() => {
        const unsubscribe = db.collection(auth.currentUser.email).doc(route.params.id).
            collection("messages").orderBy("timestamp").onSnapshot(snapshot => setMessages(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            ))

        return unsubscribe
    }, [route])

    useEffect(() => {
        db.collection(auth.currentUser.email).doc(route.params.id).update({
            seen: true,
            notify: true
        })

    }, [messages])
    const scrollViewRef = useRef();
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={140} style={styles.container}>
            <TouchableWithoutFeedback style={{display: 'flex'}}>
                <>
                    <ScrollView style={styles.chatView}
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    >
                        {messages.map(({ id, data }) => (
                            data.email === auth.currentUser.email ?
                                (
                                    <View key={id} style={styles.reciever}>
                                        <Text style={styles.recieverText}>{data.message}</Text>
                                    </View>
                                ) :
                                (

                                    <View key={id} style={styles.sender}>
                                        <Text style={styles.senderText}>{data.message}</Text>
                                    </View>
                                )
                        ))}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholder="Signal Message"
                            value={input}
                            onChangeText={(text) => setInput(text)}
                            style={styles.textInput}
                            onSubmitEditing={sendMessage}
                        />
                        <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                            <Ionicons name="send" size={24} color="#2B68E6" />
                        </TouchableOpacity>
                    </View>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
export default ChatScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
        backgroundColor: "transparent"
    },
    textInput: {
        bottom: 0,
        height: 50,
        flex: 1,
        marginRight: 15,
        backgroundColor: "#ECECEC",
        // borderWidth: 1,
        padding: 15,
        color: "grey",
        borderRadius: 30,

    },
    chatView: {
        flex: 1,
        paddingTop: 10,
    },
    recieverText: {
        color: "black",
        fontWeight: "500",
        // marginLeft: 10,
        // marginBottom: 15
    },
    senderText: {
        color: "white",
        fontWeight: "500",
        // margin: 10,
        // marginBottom: 2
    },
    reciever: {
        padding: 10,
        alignSelf: "flex-end",
        backgroundColor: "#E7EAED",
        borderRadius: 10,
        borderBottomRightRadius: 0,
        marginRight: 15,
        marginBottom: 2,
        maxWidth: "80%",
        position: "relative"
    },
    sender: {
        padding: 10,
        backgroundColor: "#2B3595",
        alignSelf: "flex-start",
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        marginLeft: 15,
        marginBottom: 2,
        maxWidth: "80%",
        position: "relative"
    },
    senderName: {
        left: 10,
        paddingRight: 10,
        fontSize: 10,
        color: "white"
    }
})

