import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Font} from '../../../../utils/Font';
import LinearGradient from 'react-native-linear-gradient';
import BibleBottomBtn from '../../../../components/Button/BibleBottomBtn';
import BibleCard from '../../../../components/Cards/BibleCard';
import SelectGameModal from '../../../../components/Modal/SelectGameModal';
import ChooseModeModal from '../../../../components/Modal/ChooseModeModal';
import LockModal from '../../../../components/Modal/LockModal';

const BibleMemory = () => {
  const [selectModal, setSelectModal] = useState(false);
  const [selectModal2, setSelectModal2] = useState(false);
  const [selectModal3, setSelectModal3] = useState(false);

  const hanldeLearn = () => {
    setSelectModal(true);
  };
  const hanldeTest = () => {
    setSelectModal3(true);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#2d76f0'}}>
      <Text style={styles.MainTxt}>Bible</Text>

      <View style={{flex: 1, paddingTop: 15}}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <BibleCard
                item={item}
                name1="Learn"
                name2="Test"
                onPress1={hanldeLearn}
                onPress2={hanldeTest}
              />
            );
          }}
        />
      </View>
      <SelectGameModal
        isVisible={selectModal}
        onBackdropPress={() => setSelectModal(false)}
      />
      <ChooseModeModal
        isVisible={selectModal2}
        onBackdropPress={() => setSelectModal2(false)}
      />
      <LockModal
        isVisible={selectModal3}
        onBackdropPress={() => setSelectModal3(false)}
      />
    </View>
  );
};

export default BibleMemory;

const styles = StyleSheet.create({
  MainTxt: {
    fontFamily: Font.font500,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

const DATA = [
  {
    id: '1',
    title: 'Day1',
  },
];
