import  {memo} from "react";

import {Controller} from "react-hook-form";

import {TextField} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import {TextInputProps} from "./types.ts";


export const TextInput = memo<TextInputProps>((
    {
        name,
        control,
        label,
        placeholder,
        type = 'text',
        startText,
        endText,
        disabled = false
    }
) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, name, value }, formState: {errors} }) => (
                <TextField
                    value={value}
                    name={name}
                    onChange={onChange}
                    fullWidth
                    label={label}
                    size={'small'}
                    type={type}
                    autoComplete="off"
                    aria-autocomplete="none"
                    aria-readonly="true"
                    placeholder={placeholder}
                    error={Boolean(errors[name])}
                    helperText={errors?.[name] && errors[name].message  as string}
                    InputProps={{
                        startAdornment: startText ? <InputAdornment position="start">{startText}</InputAdornment> : undefined,
                        endAdornment: endText ? <InputAdornment position="end">{endText}</InputAdornment> : undefined
                    }}
                    disabled={disabled}
                />
            )}
        />
    );
});
