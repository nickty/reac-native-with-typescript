import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";

const MontserratText = ({ children, style }: any) => {
  return (
    <Text style={[{ fontFamily: "montserrat" }, style]} children={children} />
  );
};

export default MontserratText;

const styles = StyleSheet.create({});
