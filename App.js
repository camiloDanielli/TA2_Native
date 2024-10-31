import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Image, Button } from "react-native";

const images = [
  {
    id: "1",
    src: require("./assets/gatos/Brizna Joven.png"),
    description: "Brizna Joven",
  },
  {
    id: "2",
    src: require("./assets/gatos/cola sombria.png"),
    description: "Cola Sombría",
  },
  {
    id: "3",
    src: require("./assets/gatos/Colmillo Ágil.png"),
    description: "Colmillo Ágil",
  },
  {
    id: "4",
    src: require("./assets/gatos/estrella espinada.png"),
    description: "Estrella Espinada",
  },
  {
    id: "5",
    src: require("./assets/gatos/garra afable.png"),
    description: "Garra Afable",
  },
  {
    id: "6",
    src: require("./assets/gatos/Hoja silenciosa.png"),
    description: "Hoja Silenciosa",
  },
  {
    id: "7",
    src: require("./assets/gatos/lluvia veloz.png"),
    description: "Lluvia Veloz",
  },
  {
    id: "8",
    src: require("./assets/gatos/Zarpa Ágil.png"),
    description: "Zarpa Ágil",
  },
];

const App = () => {
  const [imagenActual, setImagenActual] = useState(0);

  const changeImage = () => {
    setImagenActual((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Mis OC de Warrior cats</Text>
      <View style={styles.imageLargeContainer}>
        <Image source={images[imagenActual].src} style={styles.imageLarge} />
      </View>
      <Text style={styles.description}>{images[imagenActual].description}</Text>
      <Button title="Cambiar Imagen" onPress={changeImage} color="#61dafb" />

      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.src} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    padding: 20,
  },
  imageLargeContainer: {
    // Estilos para centrar la imagen grande
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  imageLarge: {
    width: 300,
    height: 200,
    borderRadius: 15,
  },
  imageContainer: {
    marginRight: 20,
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 15,
  },
  description: {
    color: "#ffffff",
    textAlign: "center",
    padding: 5,
  },
});

export default App;
