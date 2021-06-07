import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const UserForm = ({route, navigation}) =>{
    const [getUser, setUser] = useState(route.params ? route.params : {})
    
    return(
        <View style={styles.form}>
            <Text>Name</Text>
            <TextInput
             style={styles.input} 
             onChageText={ name => setUser({...getUser, name})}
             placeholder="Informe o Nome"
            />
            <Text>Email</Text>
            <TextInput
             style={styles.input} 
             onChageText={ (email) =>{setUser({...getUser, email})}}
             placeholder = "Informe o Email"
             value={getUser.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
             style={styles.input} 
             onChageText={ (photo) =>{setUser({...getUser, photo})}}
             placeholder = "Informe a URL do avatar"
             value={getUser.photo}
            />
            <Button 
            onPress={ ()=>{
                navigation.goBack()
            }}
            title="Salvar"/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
    },
})

export default UserForm