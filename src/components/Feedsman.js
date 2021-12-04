import React from 'react';
import { StyleSheet,View,Image,Text,FlatList,  Button,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Fonts} from '../contants';
const DATA=[
    {
        user_name:'Shoes',
        id:'1',
        user_image:require('../assets/images/dow.jpg'),        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
 
    },
    {
        user_name:'Jackets',
        id:'2',
        user_image:require('../assets/images/dow2.jpg'),        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name:'T-Shirt',
        id:'3',
        user_image:require('../assets/images/dow3.jpg'),        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name:'Shirts',
        id:'4',
        user_image:require('../assets/images/dow4.jpg'),    
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name:'Mobile',
        id:'5',
        user_image:require('../assets/images/dow5.jpg'),    
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name:'Pents',
        id:'6',
        user_image:require('../assets/images/dow6.jpg'),    
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    }

]


const Insta = () => {
    return(
        <View style={styles.container}>
            <FlatList
            data={DATA}
           
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={{backgroundColor:'#e1eaed'}}>
                                <Text style={styles.userName} >{item.user_name}</Text>
                    
<Image
                  style={styles.hImage}
                         source = {item.user_image}
                  />

                    
                 <Text style={{fontSize:15,color:'black',marginLeft:wp('4%'),marginRight:wp('3%'),
        marginTop:hp('2')}}>{item.description}</Text>   
        
        
        <View style={{borderRadius:30,height: hp('20%'),
       width: wp('40%'), marginLeft:wp('30'),
       marginTop:hp('4')}}>
        <Button title="Add To Cart" style={{backgroundColor:'black'}}>{item.accessor}</Button>
        </View>
                    
                </View>
            )
          
          
          }
          />
            
                    
            
                   

                </View>
                
               

         
            


)
}

export default Insta; 

const styles = StyleSheet.create({
    container:{
       
       backgroundColor: 'white',
       marginTop:30

 
    },
    card:{
        backgroundColor:'#fff',
        marginTop:hp('2'),

        

    },
    
    HeaderLeft:{
       flexDirection:'column',
    },
    hImage:{
        height: hp('50%'),
       width: wp('100%'),
       marginTop:hp('2'),


        
     
    },
    userName:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginLeft:wp('3'),
        marginTop:hp('2'),
        fontFamily:Fonts.POPPINS_MEDIUM
        


    }
   
});