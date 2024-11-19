import {useState} from 'react';
import RNFS from 'react-native-fs';
import {Alert} from 'react-native';
import {android} from '../utils/Constants';
import Toast from 'react-native-simple-toast';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const useFileDownloader = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadedFilePath, setDownloadedFilePath] = useState(null); // Store downloaded file path

  const checkStoragePermission = async () => {
    if (android) {
      const result = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      if (result === RESULTS.DENIED) {
        const requestResult = await request(
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        );
        return requestResult === RESULTS.GRANTED;
      }
      return result === RESULTS.GRANTED;
    } else {
      const mediaLibraryResult = await check(PERMISSIONS.IOS.MEDIA_LIBRARY);
      const documentResult = await check(PERMISSIONS.IOS.DOCUMENTS_FOLDER); // Optional for saving to documents

      if (mediaLibraryResult === RESULTS.DENIED) {
        const requestMediaLibrary = await request(
          PERMISSIONS.IOS.MEDIA_LIBRARY,
        );
        return requestMediaLibrary === RESULTS.GRANTED;
      }
      if (documentResult === RESULTS.DENIED) {
        const requestDocumentFolder = await request(
          PERMISSIONS.IOS.DOCUMENTS_FOLDER,
        );
        return requestDocumentFolder === RESULTS.GRANTED;
      }
      return (
        mediaLibraryResult === RESULTS.GRANTED &&
        documentResult === RESULTS.GRANTED
      );
    }
  };

  const downloadFile = async (fileUrl, filename) => {
    const hasPermission = await checkStoragePermission();
    if (!hasPermission) {
      Alert.alert('Storage permission is required to download files');
      return;
    }

    const downloadDest = `${RNFS.DocumentDirectoryPath}/${filename}`;
    setDownloadedFilePath(downloadDest); // Save the file path

    setIsDownloading(true);
    setDownloadProgress(0);

    const download = RNFS.downloadFile({
      fromUrl: fileUrl,
      toFile: downloadDest,
      background: true,
      begin: res => {
        console.log('Download started', res);
      },
      progress: res => {
        const progress = (res.bytesWritten / res.contentLength) * 100;
        setDownloadProgress(Math.round(progress));
      },
    });

    try {
      await download.promise;
      console.log('Download complete:', downloadDest);
      setIsDownloading(false);
      return downloadDest;
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      Toast.show("'Download failed");
      throw error;
    }
  };

  const deleteFile = async () => {
    if (!downloadedFilePath) {
      Alert.alert('No file to delete');
      return;
    }

    try {
      await RNFS.unlink(downloadedFilePath);
      console.log('File deleted:', downloadedFilePath);
      setDownloadedFilePath(null); // Reset the file path
      // Toast.show('File deleted successfully');
    } catch (error) {
      console.error('File deletion failed:', error);
      Alert.alert('Error', 'Failed to delete the file');
    }
  };

  return {
    downloadFile,
    deleteFile, // Expose deleteFile
    isDownloading,
    downloadProgress,
  };
};

export default useFileDownloader;
