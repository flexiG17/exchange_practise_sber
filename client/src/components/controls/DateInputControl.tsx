import {memo} from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Controller} from 'react-hook-form';

import {ControlProps} from "./types.ts";


export const DateInput = memo<ControlProps>(
    ({name, control, label}) => {
        return (
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, name, value}}) => (
                    <DatePicker name={name} value={value} onChange={onChange} label={label}/>
                )}
            />
        );
    }
);
