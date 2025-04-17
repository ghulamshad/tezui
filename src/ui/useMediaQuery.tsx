import { useMediaQuery as useMUIQuery, useTheme } from '@mui/material';

const useMediaQuery = (query: string) => {
  const theme = useTheme();
  return useMUIQuery(theme.breakpoints.up(query));
};

export default useMediaQuery;
