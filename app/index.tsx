import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
// Impor berbagai set ikon dari @expo/vector-icons
import { 
    MaterialIcons, 
    FontAwesome, 
    Ionicons, 
    MaterialCommunityIcons, 
    AntDesign, 
    Entypo, 
    Feather, 
    Octicons,
    SimpleLineIcons,
    Fontisto
} from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// --- BAGIAN DATA DAN FUNGSI (TIDAK BERUBAH) ---
const daftarNama = Array.from({ length: 123 }, (_, i) => {
    const nomor = i + 1;
    switch (nomor) {
        case 113: return "113 m.ray togubu";
        case 114: return "114 jey jey asbar";
        case 115: return "115 reski asriani";
        case 117: return "117 Hardita Subanda";
        case 118: return "118 ari ahmad dahril";
        default: return `${nomor} tidak diketahui`;
    }
});

const getNamaSekitar = (
    urutan: number,
    total: number,
    sebelum: number,
    sesudah: number
) => {
    const namaSebelum: string[] = [];
    const namaSesudah: string[] = [];
    const index = urutan - 1;

    for (let i = 1; i <= sebelum; i++) {
        const targetIndex = (index - i + total) % total;
        namaSebelum.push(daftarNama[targetIndex]);
    }

    for (let i = 1; i <= sesudah; i++) {
        const targetIndex = (index + i) % total;
        namaSesudah.push(daftarNama[targetIndex]);
    }

    return { namaSebelum, namaSesudah };
};

const NIM_URUTAN = 113;
const TOTAL_NAMA = 123;
const { namaSebelum, namaSesudah } = getNamaSekitar(NIM_URUTAN, TOTAL_NAMA, 5, 5);

const initialGridImages = [
    { id: 1, mainSrc: 'https://picsum.photos/id/31/200', altSrc: 'https://picsum.photos/id/32/200', isFlipped: false, scale: 1 },
    { id: 2, mainSrc: 'https://picsum.photos/id/33/200', altSrc: 'https://picsum.photos/id/34/200', isFlipped: false, scale: 1 },
    { id: 3, mainSrc: 'https://picsum.photos/id/35/200', altSrc: 'https://picsum.photos/id/36/200', isFlipped: false, scale: 1 },
    { id: 4, mainSrc: 'https://picsum.photos/id/37/200', altSrc: 'https://picsum.photos/id/38/200', isFlipped: false, scale: 1 },
    { id: 5, mainSrc: 'https://picsum.photos/id/39/200', altSrc: 'https://picsum.photos/id/40/200', isFlipped: false, scale: 1 },
    { id: 6, mainSrc: 'https://picsum.photos/id/41/200', altSrc: 'https://picsum.photos/id/42/200', isFlipped: false, scale: 1 },
    { id: 7, mainSrc: 'https://picsum.photos/id/43/200', altSrc: 'https://picsum.photos/id/44/200', isFlipped: false, scale: 1 },
    { id: 8, mainSrc: 'https://picsum.photos/id/45/200', altSrc: 'https://picsum.photos/id/46/200', isFlipped: false, scale: 1 },
    { id: 9, mainSrc: 'https://picsum.photos/id/47/200', altSrc: 'https://picsum.photos/id/48/200', isFlipped: false, scale: 1 },
];

// --- DATA UNTUK 10 IKON BARU ---
// Array yang mendefinisikan 10 ikon berbeda dari berbagai pustaka
const iconsData = [
  { name: 'home', library: 'MaterialIcons', color: '#e74c3c' },
  { name: 'star', library: 'FontAwesome', color: '#f1c40f' },
  { name: 'settings', library: 'Ionicons', color: '#3498db' },
  { name: 'bell', library: 'MaterialCommunityIcons', color: '#9b59b6' },
  { name: 'heart', library: 'AntDesign', color: '#e91e63' },
  { name: 'camera', library: 'Entypo', color: '#2ecc71' },
  { name: 'send', library: 'Feather', color: '#1abc9c' },
  { name: 'git-branch', library: 'Octicons', color: '#34495e' },
  { name: 'music-tone-alt', library: 'SimpleLineIcons', color: '#d35400' },
  { name: 'react', library: 'Fontisto', color: '#61dafb' },
];

// Komponen helper untuk merender ikon berdasarkan nama pustaka
type IconData = {
  name: string;
  library: string;
  color: string;
};

const RenderIcon = ({ icon }: { icon: IconData }) => {
  const size = 32; // Ukuran ikon yang seragam
  switch (icon.library) {
    case 'MaterialIcons': return <MaterialIcons name={icon.name as any} size={size} color={icon.color} />;
    case 'FontAwesome': return <FontAwesome name={icon.name as any} size={size} color={icon.color} />;
    case 'Ionicons': return <Ionicons name={icon.name as any} size={size} color={icon.color} />;
    case 'MaterialCommunityIcons': return <MaterialCommunityIcons name={icon.name as any} size={size} color={icon.color} />;
    case 'AntDesign': return <AntDesign name={icon.name as any} size={size} color={icon.color} />;
    case 'Entypo': return <Entypo name={icon.name as any} size={size} color={icon.color} />;
    case 'Feather': return <Feather name={icon.name as any} size={size} color={icon.color} />;
    case 'Octicons': return <Octicons name={icon.name as any} size={size} color={icon.color} />;
    case 'SimpleLineIcons': return <SimpleLineIcons name={icon.name as any} size={size} color={icon.color} />;
    case 'Fontisto': return <Fontisto name={icon.name as any} size={size} color={icon.color} />;
    default: return null;
  }
};


export default function Index() {
    const [gridImages, setGridImages] = useState(initialGridImages);

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Oswald-Regular': require('../assets/fonts/Oswald-Regular.ttf'),
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
        'RobotoFlex-Variable': require('../assets/fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf'),
        'Inter-Variable': require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
        'Montserrat-Variable': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
        'SourceSans3-Variable': require('../assets/fonts/SourceSans3-VariableFont_wght.ttf'),
        'PlayfairDisplay-Variable': require('../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
    });

    const namaFonts = [
        'Poppins-Regular', 'Poppins-Bold', 'Oswald-Regular', 'Lato-Regular', 'Lato-Bold',
        'RobotoFlex-Variable', 'Inter-Variable', 'Montserrat-Variable', 'SourceSans3-Variable', 'PlayfairDisplay-Variable',
    ];

    const handleImagePress = (imageId: number) => {
        setGridImages(currentImages =>
            currentImages.map(image => {
                if (image.id === imageId) {
                    const newScale = Math.min(image.scale * 1.2, 2);
                    return { ...image, isFlipped: !image.isFlipped, scale: newScale };
                }
                return image;
            })
        );
    };

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#e7014eff" />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Bagian komponen lama tetap sama */}
            <View style={styles.rectangle}>
                <Image
                    source={{ uri: "https://i.pinimg.com/736x/47/a1/33/47a133dccabe4d48d1bac190a7539055.jpg" }}
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
                <Text style={styles.redText}>Ray</Text>
                <Text style={styles.whiteText}>105841111322</Text>
            </View>
            <View style={styles.blueCircle}></View>

            {/* Tampilan Nama */}
            <View style={styles.namaContainer}>
                <Text style={styles.namaHeader}>5 Nama Sebelum (Urutan 113)</Text>
                {namaSebelum.map((nama, index) => (
                    <Text key={index} style={[styles.namaItem, { fontFamily: namaFonts[index] }]}>
                        {112 - index}. {nama}
                    </Text>
                ))}
                <Text style={styles.namaHeader}>5 Nama Setelah (Urutan 113)</Text>
                {namaSesudah.map((nama, index) => (
                    <Text key={index} style={[styles.namaItem, { fontFamily: namaFonts[index + 5] }]}>
                        {114 + index}. {nama}
                    </Text>
                ))}
            </View>

            {/* Grid gambar 3x3 */}
            <View style={styles.gridContainer}>
                {gridImages.map(image => (
                    <TouchableOpacity
                        key={image.id}
                        onPress={() => handleImagePress(image.id)}
                        style={styles.gridCell}
                    >
                        <Image
                            source={{ uri: image.isFlipped ? image.altSrc : image.mainSrc }}
                            style={[styles.gridImage, { transform: [{ scale: image.scale }], borderRadius: 8 }]}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                ))}
            </View>
            
            {/* --- BAGIAN TAMPILAN 10 IKON (BARU) --- */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionHeader}>10 Ikon Berbeda</Text>
                <View style={styles.iconContainer}>
                    {iconsData.map((icon, index) => (
                        <View key={index} style={styles.iconWrapper}>
                            <RenderIcon icon={icon} />
                        </View>
                    ))}
                </View>
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
        paddingHorizontal: 20,
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
        borderBottomColor: "red",
        marginBottom: 20,
    },
    pill: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#103f76ff",
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
        maxWidth: 330,
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
    },
    namaContainer: {
        width: '100%',
        maxWidth: 330,
        marginTop: 25,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    namaHeader: {
        fontSize: 18,
        marginBottom: 10,
        marginTop: 5,
        fontFamily: 'Poppins-Bold',
        color: '#333',
    },
    namaItem: {
        fontSize: 16,
        paddingVertical: 4,
        color: '#555',
    },
    // --- STYLE UNTUK BAGIAN IKON (BARU) ---
    sectionContainer: {
        width: '100%',
        maxWidth: 350,
        marginTop: 30,
        alignItems: 'center',
    },
    sectionHeader: {
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        color: '#333',
        marginBottom: 15,
    },
    iconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
    },
    iconWrapper: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        // Efek bayangan untuk tampilan yang lebih modern
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
});
