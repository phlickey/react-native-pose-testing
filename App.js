import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import posed from 'react-native-pose';
import icon from "./assets/icon.png";

const Overlay = posed.View({
  open: { y: 0, staggerChildren: 60 },
  closed: { y: '100vh' }
});

const Item = posed.View({
  open: { x: 0, opacity: 1 },
  closed: { x: 0, opacity: 0 }
})

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isVisible: false,
      children: ["Home", "Account", "Profile", "Settings", "Weather"]
    };
  }
  componentDidMount(){
  }
  render() {
    let {isVisible, children}=this.state;
    return (
      <View style={styles.container}>
        <Overlay style={styles.menuOverlay} pose={isVisible?"open":"closed"}>
          {children.map((el, idx)=>{
            return (
              <Item key={idx}>
                <Text style={styles.menuText}>{el}</Text>
              </Item>
            )
          })}
        </Overlay>
        <TouchableOpacity onPress={()=>{this.setState({isVisible:!isVisible})}} style={{paddingBottom: 45}}>
          <Text style={styles.text}>{isVisible?"Close Menu":"Open Menu"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: "wrap",
    width: "100%"
  },
  menuOverlay:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: "wrap",
    padding: 45,
    width: "100%",
    height: "100%"
  },
  text:{
    margin: 10,
    color: "#fff",
    fontSize: 20
  },
  menuText:{
    margin: 10,
    color: "#333",
    fontSize: 20
  }
});
