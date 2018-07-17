import React from 'react';
import {
  View,
  Image,
  Keyboard,
  Alert
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard, RkStyleSheet
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/gradientButton';
import {RkTheme} from 'react-native-ui-kitten';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';

export class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let renderIcon = () => {
        return <Image style={styles.image} source={require('../../assets/images/tiptoepaylogo.png')}/>;
    };

    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={styles.header}>
          {renderIcon()}
          <RkText rkType='logo h1'> </RkText>
          <RkText rkType='logo h0'>Tiptoepay</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Username/Email'/>
            <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
            <GradientButton style={styles.save} rkType='large' text='LOGIN' onPress={() => {
              Alert.alert('GIVE ME API!');
            }}/>
          </View>
          {/* <View style={styles.buttons}>
                <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero'>{FontAwesome.twitter}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero'>{FontAwesome.google}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero'>{FontAwesome.facebook}</RkText>
            </RkButton> 
          </View> */}

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Don’t have an account?</RkText>
              <RkButton rkType='clear' onPress={() => this.props.navigation.navigate('SignUp')}>
                <RkText rkType='header6'> Sign up now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    borderColor: theme.colors.border.solid
  },
  footer: {}
}));