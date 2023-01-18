// Author : Nemuel Wainaina

import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Pressable, Image, Dimensions, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const markPosition = (position) => {
    if(!markers[position]) {
      const temp = [...markers]
      temp[position] = currentPlayer.toLowerCase()
      setMarkers(temp)
      if(currentPlayer === 'X') {
        setCurrentPlayer('O')
      } else {
        setCurrentPlayer('X')
      }
    }
  }

  const resetMarkers = () => {
    setMarkers([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }

  const calculateWinner = (squares) => {
    let lines = [
      [0, 1, 2],
      [3, 4, 5], 
      [7, 8, 9],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const checkMarker = (marker) => {
    return marker !== null
  }

  useEffect(() => {
    const winner = calculateWinner(markers)
    if(winner === 'x') {
      Alert.alert("Game Over", "Player X Won !")
    } else if(winner == 'o') {
      Alert.alert("Game Over", "Player O Won !")
    } else {
      if(markers.filter(checkMarker).length === 9) {
        Alert.alert("Game Over", "Draw !")
      }
    }
  }, [markers])

  return (
    <SafeAreaView style={styles.container}>
      <View 
        style={[styles.player, {backgroundColor: currentPlayer === 'X'? 'blue' : 'green'}]}>
        <Text style={styles.playerTxt}>
          Player {currentPlayer}'s Turn
        </Text>
      </View>

      <View style={styles.board}>
        <Pressable style={styles.cell} onPress={() => markPosition(0)}>
          {markers[0] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[0] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(1)}>
          {markers[1] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[1] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>
        <Pressable style={[styles.cell, styles.rightCells]} onPress={() => markPosition(2)}>
          {markers[2] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[2] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>

        <Pressable style={styles.cell} onPress={() => markPosition(3)}>
          {markers[3] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[3] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>
        <Pressable style={styles.cell} onPress={() => markPosition(4)}>
          {markers[4] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[4] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>
        <Pressable style={[styles.cell, styles.rightCells]} onPress={() => markPosition(5)}>
          {markers[5] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[5] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>

        <Pressable style={[styles.cell, styles.bottomCells]} onPress={() => markPosition(6)}>
          {markers[6] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[6] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>
        <Pressable style={[styles.cell, styles.bottomCells]} onPress={() => markPosition(7)}>
          {markers[7] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[7] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>
        <Pressable style={[styles.cell, styles.bottomCells, styles.rightCells]} onPress={() => markPosition(8)}>
          {markers[8] === 'x' && <Image style={styles.icon} source={require('./assets/cross.png')}/>}
          {markers[8] === 'o' && <Image style={styles.icon} source={require('./assets/zero.png')}/>}
        </Pressable>
      </View>

      <Pressable style={styles.replayBin} onPress={() => resetMarkers()}>
        <Image style={styles.replayImg} source={require('./assets/replay.png')} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
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
  replayBin: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  replayImg: {
    height: 70,
    width: 70,
  }
});
