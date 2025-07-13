import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Ganti ke gambar dari picsum.photos, id 1011-1020 agar unik
const picsumImages = [
  "https://picsum.photos/id/1011/300/300",
  "https://picsum.photos/id/1012/300/300",
  "https://picsum.photos/id/1013/300/300",
  "https://picsum.photos/id/1014/300/300",
  "https://picsum.photos/id/1015/300/300",
  "https://picsum.photos/id/1016/300/300",
  "https://picsum.photos/id/1017/300/300",
  "https://picsum.photos/id/1018/300/300",
  "https://picsum.photos/id/1019/300/300",
];

const initialGridImages = picsumImages.map((src, idx) => ({
  id: idx + 1,
  src,
  scale: 1,
}));

export default function Index() {
  const [gridImages, setGridImages] = useState(initialGridImages);

  // Saat gambar diklik, acak gambar dari daftar baru dan reset scale ke 1
  const handleImagePress = (imageId: number) => {
    setGridImages(currentImages =>
      currentImages.map(image => {
        if (image.id === imageId) {
          // Pilih gambar acak yang berbeda dari gambar sekarang
          let newSrc = image.src;
          while (newSrc === image.src) {
            newSrc = picsumImages[Math.floor(Math.random() * picsumImages.length)];
          }
          return {
            ...image,
            src: newSrc,
            scale: 1, // reset scale
          };
        }
        return image;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://clipart-library.com/images/kcKo6jA5i.gif" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.triangle} />
      <View style={styles.pill}>
        <MaterialIcons name="person" size={24} color="white" />
        <Text style={styles.pillText}>105841111322</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.redText}>rayy</Text>
        <Text style={styles.whiteText}>105841111322</Text>
      </View>
      <View style={styles.blueCircle}></View>

      {/* Grid gambar 3x3 */}
      <View style={styles.gridContainer}>
        {gridImages.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(image.id)}
            style={styles.gridCell}
          >
            <Image
              source={{ uri: image.src }}
              style={[
                styles.gridImage,
                { 
                  transform: [{ scale: image.scale }],
                  borderRadius: 8,
                }
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 60,
  },
  rectangle: {
    width: 220,
    height: 110,
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "orange",
    marginBottom: 20,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4a90e2",
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pillText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  textContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  redText: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
  },
  blueCircle: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 100,
    marginTop: 10
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330, // Maksimal 3 kolom (100*3 + margin)
    marginTop: 20,
  },
  gridCell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  }
});
