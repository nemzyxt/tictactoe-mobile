import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Pressable, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View 
        style={[styles.player, {backgroundColor: currentPlayer === 'X'? 'blue' : 'green'}]}>
        <Text style={styles.playerTxt}>
          Player {currentPlayer}'s Turn
        </Text>
      </View>

      <View style={styles.board}>
        <Pressable style={styles.cell}>
          <Image style={styles.icon} source={require('./assets/cross.png')}/>
        </Pressable>
        <Pressable style={styles.cell}>
          <Image style={styles.icon} source={require('./assets/cross.png')}/>
        </Pressable>
        <Pressable style={[styles.cell, styles.rightCells]}>
          <Image style={styles.icon} source={require('./assets/cross.png')}/>
        </Pressable>

        <Pressable style={styles.cell}>
          <Image style={styles.icon} source={require('./assets/zero.png')}/>
        </Pressable>
        <Pressable style={styles.cell}>
          <Image style={styles.icon} source={require('./assets/cross.png')}/>
        </Pressable>
        <Pressable style={[styles.cell, styles.rightCells]}>
          <Image style={styles.icon} source={require('./assets/cross.png')}/>
        </Pressable>

        <Pressable style={[styles.cell, styles.bottomCells]}>
          <Image style={styles.icon} source={require('./assets/cross.png')}/>
        </Pressable>
        <Pressable style={[styles.cell, styles.bottomCells]}>
          <Image style={styles.icon} source={require('./assets/cross.png')}/>
        </Pressable>
        <Pressable style={[styles.cell, styles.bottomCells, styles.rightCells]}>
          <Image style={styles.icon} source={require('./assets/zero.png')}/>
        </Pressable>
      </View>

      <Pressable style={styles.cancelBin}>
        <Image style={styles.cancelImg} source={require('./assets/cancel.png')} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginTop: 25,
    paddingVertical: 5,
    borderRadius: 10
  }, 
  playerTxt: {
    color: '#fff',
    fontSize: 25
  },
  board: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  cell: {
    borderColor: '#5DF43B',
    height: windowWidth/3.7,
    width: windowWidth/3.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 5,
    borderBottomWidth: 5
  },
  rightCells: {
    borderRightWidth: 0   
  },
  bottomCells: {
    borderBottomWidth: 0
  },
  icon: {
    height: 62,
    width: 62,
  },
  cancelBin: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  cancelImg: {
    height: 70,
    width: 70,
  }
});
