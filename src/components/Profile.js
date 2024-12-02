import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        height: "35%",
        width: "70%",
      }}
    >
      <View>
        <View
          style={{
            borderRadius: 125,
            marginBottom: 15,
          }}
        >
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=",
            }}
            height={125}
            width={125}
          ></Image>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "800",
            fontSize: 20,
          }}
        >
          Rita Correia
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontWeight: "600",
          }}
        >
          London
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-around",
          width: "90%",
          marginTop: 50,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 17,
            }}
          >
            80K
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            Followers
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 17,
            }}
          >
            803K
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            Likes
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 17,
            }}
          >
            1.4K
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            Photos
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
