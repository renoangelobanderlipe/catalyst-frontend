import { useSnackbar } from 'notistack';

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = (message, options = {}) => {
    const defaultOptions = {
      variant: 'default',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      autoHideDuration: 3000,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    enqueueSnackbar(message, mergedOptions);
  };

  const showSuccessNotification = (message, options = {}) => {
    showNotification(message, { variant: 'success', ...options });
  };

  const showErrorNotification = (message, options = {}) => {
    showNotification(message, { variant: 'error', ...options });
  };

  return { showNotification, showSuccessNotification, showErrorNotification };
};

export default useNotification;
