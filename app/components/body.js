import { View, Text, StyleSheet, Image, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import { Profiles, Icons, Themes } from '../../assets/Themes';
import { useFonts } from 'expo-font';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Body(){
  return (
    
    <View style={styles.container}>
      
      <ImageBackground source={Profiles.mtl.image} imageStyle={{borderRadius: 0.01 * windowHeight}} style={[styles.profileImage, Themes.light.shadows]}>
        <Text style={styles.profileNameText}>{Profiles.mtl.name}</Text>
        <Text style={styles.profileDistanceText}>{Profiles.mtl.caption}</Text>
      </ImageBackground>

    <View style={[styles.TakeContent, Themes.light.shadows]}>
      <Text style={styles.takeText}>My hottest take</Text>
      <View style={styles.TakeIcons}>
        <Image
          source={Icons.player.light}
          style={styles.playIcon}/>
        <Image
          source={Icons.audioWave.light}
          style={styles.waveIcon}/>
      </View>
    </View>  
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '70%', 
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "8%",
    paddingBottom: "35%",

},
  TakeContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 0.66 * windowWidth,
    height: 0.12 * windowHeight,
    borderRadius: 0.02 * windowHeight,
    padding: "4%",
    marginTop: 0.01 * windowHeight,
    backgroundColor: Themes.light.bgSecondary,
  },
  TakeIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 0.66 * windowWidth,
    height: 0.726 * windowWidth,
  
    
    //overflow: 'hidden', use if rounded corners on photo don't appear

  },
  profileNameText: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 0.07 * windowWidth,
    position: 'absolute',
    paddingLeft:  0.04 * windowWidth,
    top: 0.01 * windowHeight
  },
  profileDistanceText: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 0.04 * windowWidth,
    position: 'absolute',
    paddingLeft: 0.04 * windowWidth,
    bottom: 0.01 * windowHeight,

  },
  takeText: {
    fontFamily: 'Sydney',
    color: Themes.light.text,
    fontSize: 0.05 * windowWidth
  },
  playIcon: {
    height: 0.075 * windowWidth,
    width: 0.075 * windowWidth,
    marginRight: 0.04 * windowWidth
    
  },
  waveIcon: {
    width: '74%',
    height: '96%',
    // width: 0.40 * windowWidth,
    // height: 0.04 * windowHeight,
    
  },
});
