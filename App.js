import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.padding}></View> 
      <Card> </Card>
      <Card> </Card>
      <Card> </Card>

      <StatusBar style="auto" />
    </View>
  );
}
const Card = () => {
  return(
   
      <View style={styles.card}>
        <Text>
           hallo.
         </Text>
    </View>

  )

}


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
  }
 
});
