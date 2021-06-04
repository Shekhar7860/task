import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity,Image } from 'react-native';
import {connect} from 'react-redux'
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux'; 
const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;
class MyCarousel extends Component {
 componentDidMount = () =>  {
    this.props.actions.getCorouselImages(5)
  }
    _renderItem = ({item, index}) => {
        return (
          <TouchableOpacity
                 style={{flex:1, //here you can use flex:1 also
                 aspectRatio:1}}>
                <Image style={{flex: 1}} resizeMode='cover' source={{ uri:  item}}></Image>
        </TouchableOpacity>
        );
    }
 
    render () {
        return (
            <View
             style={{flex:1, marginTop : 20}}>
            <Carousel
             layout={'tinder'} 
              ref={(c) => { this._carousel = c; }}
              data={this.props.images}
              renderItem={this._renderItem}
               sliderWidth={sliderWidth}
             itemWidth={itemWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            autoplay={false}
            snapOnAndroid={true} //to enable snapping on android
            />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    images: state.cimages,
    loading: state.loading,
  })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCarousel);