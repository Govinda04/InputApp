/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const [input1Data, setInput1Data] = useState<String[]>([]);
  const [input2Data, setInput2Data] = useState<String[]>([]);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const _handleInput1 = event => {
    let newInput = event.nativeEvent.text;
    // console.log('---Text1: ', event.nativeEvent.text);

    setInput1Data(data => [...data, newInput]);
    setInput1('');
  };
  const _handleInput2 = event => {
    let newInput = event.nativeEvent.text;
    // console.log('---Text1: ', event.nativeEvent.text);

    setInput2Data(data => [...data, newInput]);
    setInput2('');
  };

  const displyInput1 = () => {
    return (
      <>
        {input1Data.map(ip => {
          return <Text key={`ip1-${ip}`}>{ip} </Text>;
        })}
      </>
    );
  };

  const displyInput2 = () => {
    return (
      <>
        {input2Data.map(ip => {
          return <Text key={`ip1-${ip}`}>{ip} </Text>;
        })}
      </>
    );
  };

  const calcOutput1 = (data1 = [], data2 = []) => {
    let i, j;
    let arr = [];

    // 1 2 3 4
    // a b c d

    let maxlen = data1.length > data2.length ? data1.length : data2.length;

    for (i = 0; i < maxlen; i++) {
      // console.log('---i: ', i);
      if (i % 2 === 0) {
        // console.log('---in if');
        if (i >= data1.length) {
          break;
        }
        arr.push(<Text key={`op1- ${i}`}> {data1[i]}</Text>);
      } else {
        // console.log('---in else');
        if (i >= data2.length) {
          break;
        }
        arr.push(<Text> {data2[i]}</Text>);
      }
    }

    console.log('---arr: ', arr);
    return arr;
  };

  const resetDate = () => {
    setInput1Data([]);
    setInput2Data([]);
    setInput1('');
    setInput2('');
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 25,
        }}>
        {/* Input1 */}
        <View style={{marginBottom: 30}}>
          <Text>Input1:</Text>
          <TextInput
            value={input1}
            onChangeText={setInput1}
            onSubmitEditing={_handleInput1}
            style={{
              borderWidth: 1,
              minHeight: 50,
              marginBottom: 5,
              paddingLeft: 10,
            }}
          />

          <Text>Input1 History </Text>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: 'yellow',
              minHeight: 50,
              paddingLeft: 10,
              flexDirection: 'row',
            }}>
            {displyInput1()}
          </View>
        </View>

        {/* Input2 */}
        <View style={{marginBottom: 30}}>
          <Text>Input Box 2</Text>
          <TextInput
            value={input2}
            onChangeText={setInput2}
            onSubmitEditing={_handleInput2}
            style={{
              borderWidth: 1,
              minHeight: 50,
              marginBottom: 5,
              paddingLeft: 10,
            }}
          />

          <Text>Input2 History </Text>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: 'yellow',
              minHeight: 50,
              paddingLeft: 10,
              flexDirection: 'row',
            }}>
            {displyInput2()}
          </View>
        </View>

        {/* Output1 */}
        <View style={{borderWidth: 1, minHeight: 100, flexDirection: 'row'}}>
          {calcOutput1(input1Data, input2Data)}
        </View>
        {/* Output1 */}

        <View style={{borderWidth: 1, minHeight: 100, marginTop: 10}}></View>

        <Button title="Reset" onPress={resetDate} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
