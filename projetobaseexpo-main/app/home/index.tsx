import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appearance, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');
  
export default function HomeScreen() {
  <ImageViewer placeholderImageSource={PlaceholderImage} />
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  return (
  <SafeAreaProvider>
    <View style={styles.container}>
    <View style={styles.imageContainer}>
       
      </View>
      <Text>Home</Text>
      <Link
        href={{
          pathname: 'details\[id].tsx',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link>
    </View>
    </SafeAreaProvider>
  );
}

function MyComponent() {
  let colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    // render some dark thing
  } else {
    // render some light thing
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: 'center',
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
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
