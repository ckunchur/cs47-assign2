import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions} from 'react-native';
import { Profiles, Icons, Themes } from '../../assets/Themes';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Footer(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexChild}>
        <Image
            source={Icons.discover.light}
            style={styles.footerIcon}
          />
          <Text style={styles.flexText}>Discover</Text>
      </View>
      <View style={styles.flexChild}>
        <Image
            source={Icons.heart.light}
            style={styles.footerIcon}
          />
          <Text style={styles.flexText}>Matches</Text>
      </View>
      <View style={styles.flexChild}>
        <Image
            source={Icons.messages.light}
            style={styles.footerIcon}
          />
          <Text style={styles.flexText}>DM's</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.16,
    flexDirection: 'row',
    borderColor: Themes.light.navigation,
    backgroundColor: Themes.light.navigation,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: -0.03 * windowHeight

  },
  flexChild: {

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3%',
    paddingBottom: '9%'

  },
   flexText: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 0.05 * windowWidth
  },
  footerIcon: {
    height: 0.08 * windowWidth,
    width: 0.08 * windowWidth,
  },
});
