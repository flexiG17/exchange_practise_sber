import type { ReactNode } from 'react';

import type { Control } from 'react-hook-form';
import type { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

export type ControlProps = {
    name: string;
    control: Control<any>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
};

export type TextInputProps = ControlProps & {
    type?: 'text' | 'password';
    startText?: string;
    endText?: string;
};

export type PasswordInputProps = ControlProps & {
    withGenerator?: boolean;
    withShowPassword?: boolean;
    helperText?: ReactNode;
};

export type OptionValue = {
    title: string;
    value: string;
};

export type AutocompleteProps = ControlProps & {
    options: OptionValue[];
    noOptionsText?: string;
    disabled?: boolean;
    isLoading?: boolean;
    filterOptions?: MuiAutocompleteProps<any, any, any, any>['filterOptions'];
};

export type SelectValue = {
    label: string;
    value: string;
};

export type SelectBoxProps = ControlProps & {
    options: SelectValue[];
};
