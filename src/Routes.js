import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Icon } from "react-native-elements";
import UserList from "./screens/UserList";
import UserForm from "./screens/UserForm";
import { UserProvider } from "./context/UserContext";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Lista de Usúarios",
                headerRight: () => (
                  <Button
                    onPress={() => {
                      navigation.navigate("UserForm");
                    }}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />

          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: "Formulario de Usúarios",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default Routes;
