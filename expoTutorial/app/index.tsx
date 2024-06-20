import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Button from '../components/Buttons';
import { useState } from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ImageViewer from '../components/ImageViewer';

const PlaceholderImage = require('../assets/images/background-image.png');

import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
  
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <StatusBar style="auto" />

      <View style={styles.footerContainer}>
      <View style={styles.container}>
      {/* ...rest of the code remains same */}
      <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
    </View>
    <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
    </View>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  
});