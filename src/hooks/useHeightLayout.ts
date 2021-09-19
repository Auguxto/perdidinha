import {ComponentProps, useState} from 'react';
import {View} from 'react-native';

const useHeightLayout = (height: number) => {
  const [layout, setLayout] = useState({
    height: height,
  });
  const onLayout: ComponentProps<typeof View>['onLayout'] = ({nativeEvent}) => {
    setLayout(nativeEvent.layout);
  };

  return [layout, onLayout] as const;
};

export default useHeightLayout;
