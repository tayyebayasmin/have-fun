import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Image} from 'react-native';
import {CustomText, Input, ModalWrapper} from '~components';
import styles from './styles';
import {CommonStyles, width} from '~utils';
import AppColors from '~utils/AppColors';
import {Icons} from '~assets/images';
import {FontFamily} from '~utils/Fontfamily';
import {bool} from 'yup';

interface DropMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onEndReached: () => void;
  onPress: () => void;
  text: string;
  ListFooterComponent?: () => void;
  onChangeText?: () => void;
  Search?: boolean;
  Data?: any;
  onPressDone?: any;
}
const DropDown = ({
  isVisible,
  onChangeText = () => {},
  Search = false,
  Data = [],
  onClose,
  onPress,
  onEndReached,
  ListFooterComponent,
  text,
  onPressDone,
}: DropMenuProps) => {
  const [array, setArray] = useState([]);
  console.log(array);
  return (
    <ModalWrapper isVisible={isVisible} onClose={onClose}>
      <View style={styles.mainContainer}>
        {text && (
          <CustomText
            size={4}
            textStyles={{marginLeft: width(10), marginVertical: width(5)}}
            color={AppColors.gray}>
            Select {text}
          </CustomText>
        )}
        <KeyboardAwareFlatList
          data={Data}
          style={Search ? styles.autoFlat : styles.flatStyle}
          showsVerticalScrollIndicator={false}
          renderItem={({item}: {item: any}) => {
            return (
              <TouchableOpacity
                style={[styles.viewStyle, CommonStyles.rowJustifySpaceBtw]}
                onPress={() => {
                  //@ts-ignore
                  onPress(item);
                  const newArray = [...array];
                  //@ts-ignore
                  const stringIndex = newArray.indexOf(item?.name);
                  if (stringIndex !== -1) {
                    newArray.splice(stringIndex, 1);
                  } else {
                    //@ts-ignore
                    newArray.push(item?.name);
                  }

                  setArray(newArray);
                }}>
                <CustomText textStyles={CommonStyles.marginLeft_2}>
                  {item?.name}
                </CustomText>
                {
                  // @ts-ignore
                  array?.includes(item?.name) && <Image source={Icons.Icon} />
                }
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          //@ts-ignore
          ListFooterComponent={ListFooterComponent}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      </View>
      <TouchableOpacity onPress={() => onPressDone(array)}>
        <CustomText
          color={AppColors.primary}
          size={5}
          lineHeight={width(7)}
          font={FontFamily.appFontSemiBold}
          textStyles={CommonStyles.marginBottom_5}>
          DONE
        </CustomText>
      </TouchableOpacity>
    </ModalWrapper>
  );
};
export default DropDown;
