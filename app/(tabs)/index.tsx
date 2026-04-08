import { StyleSheet, Text, View } from "react-native";
import UserCard from "../../components/UserCard";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>UserCard Screen</Text>

      <UserCard nome="Érika" profissao="Backend Developer" />
      <UserCard nome="Carol" profissao="UI/UX Designer" />
      <UserCard nome="Luiz Eduardo" profissao="React Native Dev" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1020",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    color: "#FFF",
    marginBottom: 20,
    fontWeight: "bold",
  },
});
