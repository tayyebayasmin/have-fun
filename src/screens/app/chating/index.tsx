import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {Image, FlatList, View, TextInput, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Share} from '~assets/SVG';
import {CustomText, Header} from '~components';
import Input from '~components/input';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {chat} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

const Chating = ({navigation, route}: NativeStackScreenProps<any>) => {
  //@ts-ignore
  const {index} = route?.params;
  console.log(index);
  const [chatData, setChatData] = useState(chat[0]?.chatting);
  return (
    <ScreenWrapper
      statusBarColor={'transparent'}
      barStyle="light-content"
      translucent>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: width(3),
            marginLeft: width(2),
          }}>
          <Header
            containerStyle={{
              backgroundColor: AppColors.white10,
              borderColor: AppColors.white,
              borderWidth: width(0.1),
            }}
            color={AppColors.white}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomText
            size={5}
            center
            textStyles={{
              width: width(65),
              alignItems: 'center',
              marginTop: width(2),
              justifyContent: 'center',
            }}
            color={AppColors.white}
            lineHeight={width(6)}
            font={FontFamily.appFontSemiBold}>
            {chat[index]?.name}
          </CustomText>
        </View>
        <FlatList
          data={chatData}
          contentContainerStyle={{paddingBottom: width(20)}}
          renderItem={({item, index}) => {
            return (
              <View>
                <CustomText
                  color={AppColors.grey}
                  size={4}
                  center
                  textStyles={CommonStyles.marginVertical_2}
                  font={FontFamily.appFontRegular}>
                  {item?.time}
                </CustomText>
                {item?.chat?.map(itm => {
                  return (
                    <View>
                      {itm?.sender === 1 ? (
                        <View
                          style={{
                            backgroundColor: AppColors.primary,
                            width: width(55),
                            padding: width(3),
                            alignSelf: 'flex-end',
                            marginRight: width(2),
                            marginVertical: width(2),
                            borderTopLeftRadius: width(7),
                            borderBottomLeftRadius: width(7),
                            borderTopRightRadius: width(7),
                          }}>
                          <CustomText color={AppColors.white}>
                            {itm?.msg}
                          </CustomText>
                        </View>
                      ) : (
                        <View
                          style={{
                            backgroundColor: AppColors.white10,
                            width: width(55),
                            marginVertical: width(4),
                            padding: width(3),
                            marginLeft: width(2),
                            marginRight: width(2),
                            borderTopLeftRadius: width(7),
                            borderTopRightRadius: width(7),
                            borderBottomRightRadius: width(7),
                          }}>
                          <CustomText color={AppColors.white}>
                            {itm?.msg}
                          </CustomText>
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
        <View
          style={{
            backgroundColor: AppColors.white,
            width: width(90),
            position: 'absolute',
            bottom: width(5),
            height: height(8),
            justifyContent: 'space-between',
            paddingHorizontal: width(2),
            borderRadius: width(6),
            alignItems: 'center',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <TextInput placeholder="Type your message..." />
          <TouchableOpacity
            onPress={() => {
              // const newMessage = {
              //   sender: 1, // The sender's ID (1 in this case)
              //   msg: `That's great! I love that song too. 🎵`,
              // };
              // let temp = chatData[chatData?.length - 1]?.chat?.push(newMessage);
              // setChatData(temp);
            }}
            style={{
              backgroundColor: AppColors.primary,
              width: width(10),
              borderRadius: width(10),
              alignItems: 'center',
              justifyContent: 'center',
              height: width(10),
            }}>
            <Share />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Chating;
