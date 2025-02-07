import { UseFormErrors, UseFormProps } from './../types';
import * as yup from 'yup';

export const validate = function <F extends object>(
    values: F,
    props: UseFormProps<F>,
    isValidateAllFields = false
) {
    let hasErrors = false;

    if (!props.validationSchema) return;
    const validationErrors = {} as UseFormErrors<F>;
    const validateAllFields = isValidateAllFields || !!props.validateEmptyField;

    try {
        props.validationSchema.validateSync(values, { abortEarly: false });
    } catch (err) {
        const typeErr = err as yup.ValidationError;
        for (const { path, message, value } of typeErr.inner) {
            if (validateAllFields || value !== '') {
                validationErrors[path as keyof typeof validationErrors] = message;
                hasErrors = true;
            }
        }
    }
    return {
        errors: validationErrors,
        hasErrors,
    };
};
