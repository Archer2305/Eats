import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.padding}></View> 
        <Post username="Archer" path="./images/eats-demo-image.jpg" caption="omg"> </Post>

      <StatusBar style="auto" />
    </View>
  );
}





  const Post = ({ username , pfp , imagePath, caption }) => {
    return ( 
      <View style={styles.containerPost}>
        <View style={styles.header}>
          <Image src={"require('./images/instagram-logo.png')"} style={styles.logo} />
          <Text style={styles.username}>{username}</Text>
          
      
        </View>
        <Image source={ require("./images/eats-demo-image.jpg")} style={styles.image} />
        <Text style={styles.caption}>{caption}</Text> 
      </View>
    );
  };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2224',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    backgroundColor: '#181a1c',
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height:'30%',
    width:'80%',
    borderRadius:15,
    marginTop:'2%',
    marginBottom:'2%',
  },
  padding:{
    marginTop:'10%',
    marginBottom:'15%',
  },
  containerPost: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pfp: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%', //change the aspect ratio later 
    height: '40%',
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
  },
 
});
