import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {TouchableOpacity, Image, View, FlatList, TextInput} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {Chat, Search, Swip} from '~assets/SVG';
import {CustomText, Header} from '~components';
import DropDown from '~components/drop-down';

import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {languages} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';
const ChooseLanguages = ({navigation}: NativeStackScreenProps<any>) => {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState();
  const [lan, setLan] = useState(languages);
  const [selectedLanguageyState, setSelectedLanguageState] = useState(null);
  const onPress = (value: any) => {
    setSelectedLanguageState(value?.name);
  };
  return (
    <ScreenWrapper
      statusBarColor={'white'}
      barStyle="dark-content"
      translucent
      scrollType="scroll">
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Header
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomText
            center
            color="#22172A"
            size={5.5}
            lineHeight={width(7)}
            textStyles={{width: width(70), marginTop: width(5)}}
            font={FontFamily.appFontSemiBold}>
            Choose Language
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: AppColors.white40,
            borderRadius: width(5),
            marginVertical: width(5),
            paddingHorizontal: width(2),
          }}>
          <Search />

          <TextInput
            placeholder="Search"
            style={{marginLeft: width(2)}}
            onChange={(val: any) => {
              setValue(val);
            }}
            value={value}
          />
        </View>
        <KeyboardAwareFlatList
          data={lan}
          showsVerticalScrollIndicator={false}
          renderItem={({item}: {item: any}) => {
            return (
              <TouchableOpacity
                style={[styles.viewStyle, CommonStyles.rowJustifySpaceBtw]}
                onPress={() => {
                  onPress(item);
                  const newArray = [...array];
                  //@ts-ignore
                  const stringIndex = newArray.indexOf(item?.language);
                  if (stringIndex !== -1) {
                    newArray.splice(stringIndex, 1);
                  } else {
                    //@ts-ignore
                    newArray.push(item?.language);
                  }

                  setArray(newArray);
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={item?.image} resizeMode="contain" />
                  <CustomText textStyles={CommonStyles.marginLeft_2}>
                    {item?.language}
                  </CustomText>
                </View>

                {
                  //@ts-ignore
                  array?.includes(item?.language) && (
                    <Image source={Icons.Icon} />
                  )
                }
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.5}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ChooseLanguages;
