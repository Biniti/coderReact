import React, { useContext } from "react";
import { View, FlatList, Alert } from "react-native";
import { ListItem, Avatar, Button, Icon } from "react-native-elements";
import UserContext from "../../context/UserContext"

const UserList = ({ navigation }) => {

  const {state} = useContext(UserContext)

  const confirmUserDelete = (user) => {
    Alert.alert("Excluir Usuario", "Deseja excluir usuario?", [
      {
        text: "Sim",
        onPress() {
          console.warn(`Delete ${user.id}`);
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={({ item: user }) => {
          return (
            <ListItem
              onPress={() => navigation.navigate("UserForm", user)}
              bottomDivider
            >
              <Avatar source={{ uri: user.photo }} />
              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem>
                <Button
                  onPress={() => {
                    navigation.navigate("UserForm", user);
                  }}
                  type="clear"
                  icon={<Icon name="edit" size={25} color="orange" />}
                />
              </ListItem>
              <ListItem>
                <Button
                  onPress={() => {
                    confirmUserDelete(user);
                  }}
                  type="clear"
                  icon={<Icon name="delete" size={25} color="red" />}
                />
              </ListItem>
            </ListItem>
          );
        }}
      />
    </View>
  );
};

export default UserList;
