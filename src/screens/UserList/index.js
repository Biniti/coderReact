import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, FlatList, Alert } from "react-native";
import { ListItem, Avatar, Button, Icon } from "react-native-elements";
import { users } from "../../services/Users";

const UserList = ({ navigation }) => {
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
        data={users}
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
