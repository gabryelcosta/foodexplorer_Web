import { useRef, useState } from 'react';
import UploadSVG from '../../components/Icons/UploadSVG';
import { Container } from './styles'

export function FileButton({ onFileSelect, onDeleteFile, fileName }) {
  const fileInputRef = useRef();
  const [fileSelected, setFileSelected] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Prevent triggering click event twice
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileSelected(true);
      if (onFileSelect) {
        onFileSelect(event);
      }
    }
  };

  const handleCancelUpload = (event) => {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Prevent triggering file select
    fileInputRef.current.value = '';
    setFileSelected(false);

    if (onDeleteFile) {
      onDeleteFile();
    }
  };

  return (
    <Container>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <div className="file_buttons">
        <div className="upload_button" onClick={handleButtonClick}>
          <UploadSVG />
          <span>{fileName || 'Selecione imagem'}</span>
        </div>
        {(fileSelected || fileName) && (
          <div className="cancel_button" onClick={handleCancelUpload}>
            X
          </div>
        )}
      </div>
    </Container>
  );
}