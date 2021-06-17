import React, { useContext } from 'react';

import Context from '../../../../context';
import useAnnotation from '../../../../hooks/useAnnotation';
import OptionsPopup from '../OptionsPopup';
import { AVAILABLE_ANNOTATIONS_NAMES } from '../Annotate.constants';
import { AnnotateOperationsWrapper } from './Operations.styled';
import calcLineDimensionProps from './calcLineDimensionProps';

const Line = ({ defaultStrokeColor = '#000000', defaultStrokeSize = 3, defaultLineCap = 'butt' }) => {
  const { selections = [] } = useContext(Context);
  useAnnotation({
    libClassName: 'Line',
    name: AVAILABLE_ANNOTATIONS_NAMES.LINE,
    calcDimensionsProps: calcLineDimensionProps,
    stroke: defaultStrokeColor,
    strokeWidth: defaultStrokeSize,
    lineCap: defaultLineCap,
    dash: [10, 10],
    dashEnabled: false,
  });

  if (!selections[0]) { return ''; }

  return (
    <AnnotateOperationsWrapper>
      <OptionsPopup />
    </AnnotateOperationsWrapper>
  );
}

export default Line;