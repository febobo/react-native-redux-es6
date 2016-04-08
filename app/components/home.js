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
   let num = [7,8,9,4,5,6,1,2,3];
   if(start !== undefined) num = num.slice(start,end);
   return {
     num : num,
     operator : ['/' , '*' , '-' ,'+']
   }
 }
 render (){
   const {add , resultNum , addMethod , clear , result} = this.props.actions;
   return (
     <View style={[styles.leftTop,{flex:1,flexDirection:'column'}]}>
       <View style={[styles.result]}>
          <Text style={[styles.resultText]}>{this.props.state.resultNum}</Text>
       </View>
       <View style={{flex:5 , flexDirection:'row'}}>
          <View style={{flex :3 , backgroundColor:'red'}}>
              <View style={[styles.cell,styles.containers]}>

                <TouchableOpacity onPress={() => clear('AC')} style={[styles.numItem,{backgroundColor:'#E5E5E5'}]} >
                  <View >
                    <Text style={[styles.numItemText]}>AC</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clear('AC')} style={[styles.numItem,{backgroundColor:'#E5E5E5'}]} >
                  <View >
                    <Text style={[styles.numItemText]}>+/-</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clear('AC')} style={[styles.numItem,{backgroundColor:'#E5E5E5'}]} >
                  <View >
                    <Text style={[styles.numItemText]}>%</Text>
                  </View>
                </TouchableOpacity>

              </View>
              <View style={{flex : 3 , flexDirection:'column'}}>
                <View style={{flex : 1, flexDirection : 'row'}}>
                  {this.initNum(0,3).num.map( (v,k) =>
                    <TouchableOpacity onPress={() => add(v)} style={[styles.numItem]} key={k} >
                      <View>
                        <Text style={[styles.numItemText]}>{v}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={{flex : 1, flexDirection : 'row'}}>
                  {this.initNum(3,6).num.map( (v,k) =>
                    <TouchableOpacity onPress={() => add(v)} style={[styles.numItem]} key={k} >
                      <View >
                        <Text style={[styles.numItemText]}>{v}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={{flex : 1, flexDirection : 'row'}}>
                  {this.initNum(6,9).num.map( (v,k) =>
                    <TouchableOpacity onPress={() => add(v)}  style={[styles.numItem]} key={k}  >
                      <View>
                        <Text style={[styles.numItemText]}>{v}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View style={[styles.cell,styles.containers]}>

             <TouchableOpacity onPress={() => add('0')} style={[styles.numItem,{flex:2}]} >
                <View >
                  <Text style={[styles.numItemText]}>0</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => add('.')} style={[styles.numItem]} >
                <View >
                  <Text style={[styles.numItemText]}>.</Text>
                </View>
             </TouchableOpacity>
             </View>

          </View>
          <View style={[styles.operator]}>
            {this.initNum().operator.map( (v,k) =>
             <TouchableOpacity onPress={() => addMethod(v)} key={k} style={[styles.operatorItem]} >
                <View>
                   <Text style={[styles.operatorItemText]}>{v}</Text>
                </View>
             </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => result()}  style={[styles.operatorItem]} >
               <View>
                  <Text style={[styles.operatorItemText]}>=</Text>
               </View>
            </TouchableOpacity>
          </View>
       </View>
     </View>
   )
 }
}


let globalOperatorColor = '#EF7B25';
let globalNumColor = '#F0F0F0';

let styles = StyleSheet.create({
  leftTop : {
    paddingTop : 80
  },
  result :{
    flex : 2,
    backgroundColor : '#333',
    justifyContent :'center',
    padding : 10
  },
  resultText : {
    textAlign : 'right',
    fontSize : 60,
    color : '#fff'
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
    backgroundColor : globalOperatorColor
  },
  numItem :{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 1,
    backgroundColor : globalNumColor
  },
  numItemText : {
    fontSize : 26,
  },
  operatorItemText : {
    fontSize : 26,
    color : '#fff'
  },
  flexCenter : {
    alignItems : 'center',
    justifyContent : 'center',
  }

})
