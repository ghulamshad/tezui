import React from 'react';
import { Autocomplete as MUIAutocomplete, AutocompleteProps as MUIAutocompleteProps } from '@mui/material';
import { TextField } from '@mui/material';

interface AutocompleteProps<T> extends MUIAutocompleteProps<T, false, false, false> {
  label: string;
}

function Autocomplete<T>({ label, ...props }: AutocompleteProps<T>) {
  return (
    <MUIAutocomplete
      {...props}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

export default Autocomplete;
