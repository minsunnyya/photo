import React, {useState} from 'react';
import ColorPanel from 'react-native-color-panel';

const ColorSelect = () => {
  const [color, setColor] = useState('#ffffff');

  return (
    <ColorPanel
      style={{flex: 1}}
      color={color}
      onChange={selectedColor => setColor(selectedColor)}
    />
  );
};

export default ColorSelect;
