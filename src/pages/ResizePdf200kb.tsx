import React from 'react';
import ResizePdfInKb from './ResizePdfInKb';

const ResizePdf200kb: React.FC = () => {
  return <ResizePdfInKb initialLimit={200} routeKey="/resize-pdf-200kb" />;
};

export default ResizePdf200kb;
