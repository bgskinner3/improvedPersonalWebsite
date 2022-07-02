import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import FileViewer from 'react-file-viewer';
import { pdfjs } from 'react-pdf';

import Resume from './Resume/Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
const file = 'Resume.pdf';
const type = 'pdf';

const ResumePage = () => {
  const [view, setView] = useState(false);
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const handleView = () => {
    setView(!view);
  };
  


  return (
    // <div>
    //   <button onClick={handleView}>View</button>
    //   {view && <FileViewer fileType={type} filePath={file} />}
    // </div>

    <Document
      file={Resume}
      onLoadSuccess={onDocumentLoadSuccess}
       options={{ workerSrc: '/pdf.worker.js' }}
    >
      <Page pageNumber={pageNumber} />
    </Document>
  );
};

export default ResumePage;

// import React, { useState } from 'react';
// import { Viewer } from 'react-pdf-viewer';
// import Resume from './Resume/Resume.pdf';
// // Plugins
// import { defaultLayoutPlugin } from 'react-pdf-viewer/default-layout';

// // Import styles
// // import 'react-pdf-viewer/core/lib/styles/index.css';
// // import 'react-pdf-viewer/default-layout/lib/styles/index.css';

// // Create new plugin instance

// const ResumePage = () => {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <Viewer
//     fileUrl={Resume}
//     plugins={[
//         // Register plugins
//         defaultLayoutPluginInstance,

//     ]}
// />
//   )
// }

// export default ResumePage;
