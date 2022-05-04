import { StyleSheet, Text, View ,Button} from 'react-native';
import React, { useState } from 'react'



const Notification = () => {
  const [count,setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Notification</Text>
      <Text>{count}</Text>
      <Button onPress={()=>setCount(prev=>prev+1)} title="+"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: 'pink',
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 15,
  },
})

export default Notification