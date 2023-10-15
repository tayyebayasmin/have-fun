import React, {forwardRef, useImperativeHandle, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DropDownMenu from '~components/drop-down-menu';

interface Props {
  onFilesSelected: (val: any) => void;
}

const FilePickerModal = ({onFilesSelected}: Props, ref: any) => {
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
    cleanTempImages: () => {
      ImagePicker.clean()
        .then(() => {
          console.log('removed all tmp images from tmp directory');
        })
        .catch(console.log);
    },
  }));
  function openCamera() {
    ImagePicker.openCamera({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.01,
      includeBase64: true,
    }).then(onFilesSelected);
  }
  function openGallery() {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.1,
      height: 400,
      width: 400,
      includeBase64: true,
    }).then(onFilesSelected);
  }
  function openPicker(type = 0) {
    setVisible(false);
    setTimeout(type === 0 ? openCamera : openGallery, 600);
  }
  return (
    <DropDownMenu
      isVisible={isVisible}
      firstBtnText="Take Photo"
      secondBtnText="Choose from Library"
      onPressFirstBtn={() => openPicker(0)}
      onPressSecondBtn={() => openPicker(1)}
      onClose={() => setVisible(false)}
    />
  );
};
export default forwardRef(FilePickerModal);
