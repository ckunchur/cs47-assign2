import { View, Text, StyleSheet, Image, SafeAreaView,  Dimensions  } from 'react-native';
import { Profiles, Icons, Themes } from '../../assets/Themes';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Header(){
  return (
    <SafeAreaView style={styles.container}> 
        <Image
          source={Icons.menu.light}
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>ensom
        </Text>
        <Image
          source={Icons.sun}
          style={styles.headerIcon}
        />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    margin: "5%",
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0.03 * windowHeight
    //backgroundColor: 'red'
  },
  headerText: {
    fontFamily: 'SydneyBold',
    color: Themes.light.text,
    fontSize: 0.08 * windowWidth,
  },
  headerIcon: {
    height: 0.1 * windowWidth,
    width: 0.1 * windowWidth,
  },
});
