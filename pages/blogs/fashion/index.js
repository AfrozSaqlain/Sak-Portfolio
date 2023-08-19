import PDFViewer from '../../../components/PDFViewer';

const fashion = () => {
  const pdfUrl = '/qft.pdf';

  return (
    <div>
      <h1>PDF Viewer</h1>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default fashion;