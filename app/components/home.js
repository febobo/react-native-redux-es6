import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default class Home extends Component {
 constructor (props){
   super(props);
 }

 initNum (start , end){
   let num = [1,2,3,4,5,6,7,8,9];
   if(start) num = num.slice(start,end);
   return {
     num : num,
     operator : ['/' , '*' , '-' ,'+' ,'=']
   }
 }
 render (){
   console.log(this.props)
   return (
     <View style={[styles.containers , styles.leftTop]}>
       <View style={[styles.containers]}>
          <View style={{flex :3 , backgroundColor:'red'}}>
              <View style={[styles.cell]}></View>
              <View style={{flex : 3 , flexDirection:'column'}}>
                <View style={{flex : 1, flexDirection : 'row'}}>
                  {this.initNum(0,3).num.map( (v,k) =>
                      <View style={[styles.operatorItem]}>
                        <Text style={[styles.cell]}>{v}</Text>
                      </View>
                  )}
                </View>
                <View style={{flex : 1, flexDirection : 'row'}}>
                  {this.initNum(3,6).num.map( (v,k) =>
                      <View style={[styles.operatorItem]}>
                        <Text style={[styles.cell]}>{v}</Text>
                      </View>
                  )}
                </View>
                <View style={{flex : 1, flexDirection : 'row'}}>
                  {this.initNum(6,9).num.map( (v,k) =>
                      <View style={[styles.operatorItem]}>
                        <Text style={[styles.cell]}>{v}</Text>
                      </View>
                  )}
                </View>
              </View>
              <View style={[styles.cell]}></View>
          </View>
          <View style={[styles.operator]}>
            <View style={{flex: 1, flexDirection:'column', backgroundColor:"#eeeeee"}}>
               {this.initNum().operator.map( (v,k) =>
                   <View style={[styles.operatorItem]}>
                      <Text style={[styles.operatorItemText]}>{v}</Text>
                   </View>
               )}
            </View>
          </View>
       </View>
     </View>
   )
 }
}
// {this.initNum().operator.map( (v,k) =>
//   <TouchableHighlight key={k}>
//     <View sytle={{flex: 1, backgroundColor:"#aabbaa"}}>
//       <Text >{v}</Text>
//     </View>
//   </TouchableHighlight>
// )}

let styles = StyleSheet.create({
  leftTop : {
    paddingTop : 80
  },
  cell :{
    flex : 1
  },
  containers : {
    flexDirection : 'row',
    flex :1
  },
  rows :{
    flexDirection : 'column',
    flex : 1
  },
  num :{
    flex : 3,
    flexDirection : 'column',
  },
  operator : {
    flex : 1,
    flexDirection:'column',
    backgroundColor : 'red'
  },
  operatorItem :{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 1,
    backgroundColor : '#EF7B25'
  },
  operatorItemText : {
    fontSize : 22,
    color : '#fff'
  }

})
