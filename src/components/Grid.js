import React, { useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux'; 

const Grid = (props) => {
	useEffect(() => {
    props.actions.getImages(21)
  }, []);
return (<View style={{ flex: 1}}>
	{props.images.length > 0? 
		<FlatList  style={{margin:5}} data={props.images}
		numColumns={3}
		 keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
       // console.log('images', item)
    <TouchableOpacity
                 
                 style={{flex:1/3, //here you can use flex:1 also
                 aspectRatio:1}}>
                <Image style={{flex: 1}} resizeMode='cover' source={{ uri:  item}}></Image>
        </TouchableOpacity>
    
  )}
/> : null}
</View>)
}
const mapStateToProps = state => ({
    images: state.images,
    loading: state.loading,
  })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid);