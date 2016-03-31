'use strict';

import React, { Component , Navigator} from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/home';
import * as counterActions from '../actions/couterActions';
import { connect } from 'react-redux';
import navigationBar from './navigationBar'

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    let defaultName = 'ReactRedux';
    let defaultComponent = Counter;
    console.log(this.props)
    return (
      <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route, navigator) => {
            console.log(route)
              let Component = route.component;
              return <Component {...this.props} {...route.params} navigator={navigator} />
          }}
          navigationBar={navigationBar}
      />
    );
  }
}


export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
})
)(CounterApp);
