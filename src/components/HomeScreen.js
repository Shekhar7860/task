import React, { useEffect } from 'react';
import { Text, View,SafeAreaView,ScrollView } from 'react-native';
import {connect} from 'react-redux'
import Grid from './Grid'
import MyCarousel from './MyCarousel'
import Spinner from 'react-native-loading-spinner-overlay';
const HomeScreen = (props) => {
	return (
		<SafeAreaView style={{flex:1}}>
		<ScrollView>
		<MyCarousel/>
		<Grid/>
		</ScrollView>
		  <Spinner
          visible={props.loading}
          textContent={'Loading...'}
          
        />
		</SafeAreaView>)
}



const mapStateToProps = state => ({
    loading: state.loading,
  })


//export your list as a default export 
export default connect(mapStateToProps)(HomeScreen);