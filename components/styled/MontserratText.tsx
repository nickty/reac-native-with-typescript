import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";

const MontserratText = ({ children }: any) => {
  return <Text style={{ fontFamily: "montserrat" }}>{children}</Text>;
};

export default MontserratText;

const styles = StyleSheet.create({});
