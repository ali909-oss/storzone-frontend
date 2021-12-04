import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {Display} from '../utils';
import Tabs from '../Tabs/Bottomtabs';
import {Fonts} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import { Colors } from '../contants';
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {useState} from 'react';

import {color} from 'react-native-elements/dist/helpers';
import { Separator } from '../components';
import {Searchbar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchHome from '../components/SearchHome';
import Homeflatlist from '../components/Homeflatlist';
import Accountspage from '../components/Accountspage';  
import { WebView } from 'react-native-webview';
const HomeScreen = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  return (
     <View style = {{flex:1,backgroundColor:"white"}}>
            <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
        
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      
 
       <SearchHome/>
       <Homeflatlist/>

         
     </View>
       
      
  );
};const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center', 
    color:Colors.LIGHTCOLOR
  },
});
export default HomeScreen;
