import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  FontAwesome5,
} from "react-native-vector-icons";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

export default (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View style={styles.userInfo}>
            <Avatar.Image source={require("./ProfileImage.png")} />
            <Text style={styles.text}>Abdullah Khan</Text>
            <Caption style={styles.caption}>@abdullah7003</Caption>
            <View style={styles.counter}>
              <Text style={{ fontSize: 16, marginTop: 3, fontWeight: "bold" }}>
                459
              </Text>
              <Caption style={{ fontSize: 16 }}> Following</Caption>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 4,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                14
              </Text>
              <Caption style={{ fontSize: 16, marginTop: 4 }}>
                {" "}
                Followers
              </Caption>
            </View>
          </View>
          <View style={styles.options}>
            <Drawer.Section>
              <DrawerItem
                icon={({ color, size }) => (
                  <AntDesign name="user" size={32} color="gray" />
                )}
                label="Profile"
                onPress={() => alert("Profile")}
              />

              <DrawerItem
                icon={({ color, size }) => (
                  <Feather name="message-circle" size={32} color="gray" />
                )}
                label="Topics"
                onPress={() => alert("Topics")}
              />

              <DrawerItem
                icon={({ color, size }) => (
                  <Feather name="bookmark" size={32} color="gray" />
                )}
                label="Bookmarks"
                onPress={() => alert("Bookmarks")}
              />

              <DrawerItem
                style={{ marginLeft: 20 }}
                icon={({ color, size }) => (
                  <FontAwesome5 name="bolt" size={34} color="gray" />
                )}
                label="Moments"
                onPress={() => alert("Moments")}
              />

              <DrawerItem
                style={{ marginLeft: 20 }}
                label="Settings and privacy"
                onPress={() => alert("Settings and privacy")}
              />

              <DrawerItem
                style={{ marginLeft: 20 }}
                label="Help Centre"
                onPress={() => alert("Help Centre")}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <View style={{ flexDirection: "row" }}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="lightbulb-on"
                size={34}
                color="#00acee"
              />
            )}
            label=""
            onPress={() => alert("Dark Mode")}
          />

          <DrawerItem
            style={{ marginLeft: 80 }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="qrcode" size={34} color="#00acee" />
            )}
            label=""
            onPress={() => alert("QR CODE")}
          />
        </View>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomIcons: {
    flex: 1,
    flexDirection: "row-reverse",
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  userInfo: {
    marginLeft: 20,
    marginTop: 20,
  },
  caption: {
    fontSize: 16,
    marginTop: 5,
  },
  counter: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
  },
  options: {
    marginTop: 20,
  },
});
