import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  nome: string;
  profissao: string;
};

export default function UserCard({ nome, profissao }: Props) {
  const [online, setOnline] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.status}>{online ? "Online" : "Offline"}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => setOnline(!online)}>
        <Text style={styles.textoBotao}>Alterar status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#1E1E2F",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  profissao: {
    fontSize: 16,
    color: "#CFCFEA",
    marginBottom: 10,
  },
  status: {
    color: "#A8E6A3",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#7C4DFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
