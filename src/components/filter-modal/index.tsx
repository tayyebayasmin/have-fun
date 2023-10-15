import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import {StyleSheet, Switch, TouchableOpacity, View, Image} from 'react-native';
import {Close, RightArrowSvg} from '~assets/SVG';
import {Button, CustomText, ModalWrapper} from '~components';
import AppColors from '~utils/AppColors';
import {CommonStyles} from '~utils';
import {height, width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';
interface Props {
  isVisible?: any;
  onClose: () => void;
  values?: any;
  onApply?: () => void;
  onPressBodyFilter?: () => void;
}
const FilterModal = ({
  isVisible,
  onClose,
  values = [],
  onApply,
  onPressBodyFilter,
}: Props) => {
  const [multiSliderValue, setMultiSliderValue] = useState([15]);
  const [multiSlider2Value, setMultiSlider2Value] = useState([15, 20]);
  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
  const multiSlider2ValuesChange = (values: any) =>
    setMultiSlider2Value(values);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [preview, setPreview] = useState(values[0]);
  return (
    <ModalWrapper
      isVisible={isVisible}
      onClose={onClose}
      avoidKeyboard={true}
      animationIn={'zoomInUp'}
      animationOut={'zoomOutDown'}>
      <View style={styles.modalContainer} testID="modal-container">
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={onClose}
            style={{position: 'absolute', right: 0, top: -0.5}}>
            <Close height={28} width={28} color={AppColors.primaryPurple} />
          </TouchableOpacity>
          <CustomText
            size={6}
            color={AppColors.primaryPurple}
            lineHeight={height(6)}
            font={FontFamily.appFontSemiBold}>
            Filters
          </CustomText>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CustomText
            size={4.5}
            color={AppColors.primaryPurple}
            lineHeight={height(4)}
            font={FontFamily.appFontSemiBold}>
            Location
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              size={4}
              color={AppColors.grey}
              lineHeight={height(4)}
              textStyles={CommonStyles.marginRight_2}
              font={FontFamily.appFontRegular}>
              People nearbly
            </CustomText>
            <RightArrowSvg
              height={width(4)}
              width={width(5)}
              color={AppColors.grey10}
            />
          </View>
        </View>
        <View
          style={{
            width: width(90),
            marginTop: width(3),
            borderBottomWidth: width(0.6),
            borderColor: AppColors.grey15,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: width(5),
          }}>
          <CustomText
            size={4.5}
            color={AppColors.primaryPurple}
            lineHeight={height(4)}
            font={FontFamily.appFontSemiBold}>
            Distance
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              size={4}
              color={AppColors.primary}
              lineHeight={height(4)}
              textStyles={CommonStyles.marginRight_2}
              font={FontFamily.appFontSemiBold}>
              {multiSliderValue[0]}km
            </CustomText>
          </View>
        </View>
        <MultiSlider
          enabledOne
          trackStyle={{
            backgroundColor: AppColors.grey15,
            height: width(1),
          }}
          selectedStyle={{
            backgroundColor: AppColors.primary,
            height: width(1),
          }}
          markerStyle={{
            backgroundColor: AppColors.primary,
            width: width(5),
            height: width(5),
          }}
          values={[multiSliderValue[0]]}
          allowOverlap={false}
          sliderLength={width(90)}
          onValuesChange={multiSliderValuesChange}
          min={10}
          max={40}
          step={1}
          snapped
        />
        <View
          style={{
            width: width(90),
            borderBottomWidth: width(0.6),
            borderColor: AppColors.grey15,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: width(5),
          }}>
          <CustomText
            size={4.5}
            color={AppColors.primaryPurple}
            lineHeight={height(4)}
            font={FontFamily.appFontSemiBold}>
            Age
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              size={4}
              color={AppColors.primary}
              lineHeight={height(4)}
              textStyles={CommonStyles.marginRight_2}
              font={FontFamily.appFontSemiBold}>
              {multiSlider2Value[0]}-{multiSlider2Value[1]}
            </CustomText>
          </View>
        </View>
        <MultiSlider
          enabledOne
          trackStyle={{backgroundColor: AppColors.grey15, height: width(1)}}
          selectedStyle={{
            backgroundColor: AppColors.primary,
            height: width(1),
          }}
          markerStyle={{
            backgroundColor: AppColors.primary,
            width: width(5),
            height: width(5),
          }}
          values={[multiSlider2Value[0], multiSlider2Value[1]]}
          allowOverlap={false}
          sliderLength={width(90)}
          onValuesChange={multiSlider2ValuesChange}
          min={10}
          max={40}
          step={1}
          snapped
        />
        <View
          style={{
            width: width(90),
            borderBottomWidth: width(0.6),
            borderColor: AppColors.grey15,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: width(5),
          }}>
          <CustomText
            size={4.5}
            color={AppColors.primaryPurple}
            lineHeight={height(4)}
            font={FontFamily.appFontSemiBold}>
            Online now
          </CustomText>
          <Switch
            trackColor={{
              //@ts-ignore
              false: AppColors.grey15 == 30,
              true: AppColors.primary,
            }}
            thumbColor={isEnabled ? AppColors.white : AppColors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View
          style={{
            marginTop: width(5),
            width: width(90),
            borderBottomWidth: width(0.6),
            borderColor: AppColors.grey15,
          }}
        />
        <TouchableOpacity
          onPress={onPressBodyFilter}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: width(5),
            alignItems: 'center',
          }}>
          <CustomText
            size={4.5}
            color={AppColors.primaryPurple}
            lineHeight={height(4)}
            font={FontFamily.appFontSemiBold}>
            Body Filter
          </CustomText>
          <RightArrowSvg
            height={width(4)}
            width={width(5)}
            color={AppColors.grey10}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: width(5),
            width: width(90),
            borderBottomWidth: width(0.6),
            borderColor: AppColors.grey15,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: width(4),
          }}>
          <Button containerStyle={{width: width(42)}} onPress={onClose}>
            Reset
          </Button>
          <Button containerStyle={{width: width(42)}} onPress={onApply}>
            Apply
          </Button>
        </View>
      </View>
    </ModalWrapper>
  );
};
export default FilterModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    width: width(90),
    borderRadius: 20,
    alignSelf: 'center',
    paddingBottom: height(3),
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: width(1),
  },
  inputStyle: {
    width: width(35),
    height: height(6),
    borderBottomWidth: width(0.4),
    color: AppColors.black,
  },
  accuteBedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(2),
    paddingVertical: height(1),
    justifyContent: 'space-between',
  },
  interFacilityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: width(5),
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: AppColors.black,
    paddingVertical: height(1),
    marginRight: width(2),
    borderRadius: width(5),
    paddingHorizontal: width(4),
  },
  notSelectedTab: {
    borderColor: AppColors.black,
    paddingVertical: height(1),
    marginRight: width(2),
    borderRadius: width(5),
    paddingHorizontal: width(4),
    borderWidth: width(0.3),
  },
  markerStyle: {
    borderColor: AppColors.black,
    height: height(2.3),
    width: width(4.3),
    borderWidth: width(0.4),
    marginHorizontal: width(2),
  },
  trackStyle: {
    backgroundColor: AppColors.black30,
  },
  selectedStyle: {
    backgroundColor: AppColors.black,
  },
  checkBoxStyle: {
    marginTop: -2,
    height: height(3),
    width: height(3),
    marginRight: width(1),
  },
});
