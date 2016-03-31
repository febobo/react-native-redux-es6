import React,{
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  base : {
    flex : 1
  }
})

let NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
         onPress={ () => route.onPress() }>
         <Text style={ styles.rightNavButtonText }>
              { route.rightText || 'Right Button' }
         </Text>
       </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {
    return <Text style={{fontSize:18 , lineHeight:40}}>ReactRedux</Text>
  }
};

export default (
  <Navigator.NavigationBar
    style={{backgroundColor: '#e78170'}}
    routeMapper={NavigationBarRouteMapper}
  />
)
