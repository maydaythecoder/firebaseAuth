import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { signOut } from "firebase/auth";
// import { Feed } from "@/components/Feed";
import { auth } from "@/config";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.container}>
      {/* <Feed /> */}
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
