import React from 'react'
import { View ,StyleSheet,Text} from 'react-native'
import { Avatar ,Badge} from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import {db,auth} from "../firebase"
const CustomListItem=({id,chatName,displayName, chatImg,enterChat,message,seen,schedulePushNotification,notify, lastName})=>{
    // const temp=async(chatName,message)=>{

    //     console.log(chatName,message)
    //     await schedulePushNotification(chatName,message)

    // }

    // if(seen===false && notify===false ){

    // db.collection(auth.currentUser.email).doc(chatName).update({
    //         notify:true
    //     })
    // temp(chatName,message);
    // }
    return (
       <ListItem key={id} onPress={()=>enterChat(id,chatName,chatImg,displayName)}>
           <View>
           <Avatar
           rounded
           source={{
               uri:chatImg
           }}
           />
           {

            seen?<></>:  <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />
           }
       
        </View>
           <ListItem.Content>
               <ListItem.Title style={{fontWeight:"800"}}>
                  {displayName}
               </ListItem.Title>
               <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                   {lastName?lastName + ": " + message:""}
               </ListItem.Subtitle>
           </ListItem.Content>
       </ListItem>

    )
}
export default CustomListItem
