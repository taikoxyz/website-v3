import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react';
import { Optional } from './typescript';

interface Children<T extends object> {
    children: React.ReactNode;
    params?: Optional<T>;
}

export const createProvider = function <T extends object>(initialState: T) {
    const ProviderContext = createContext<[T, Dispatch<SetStateAction<T>>]>([
        initialState,
        () => null,
    ]);

    const useProvider = () => {
        const [state] = useContext(ProviderContext);
        return state;
    };

    const useProviderSetter = () => {
        const [, setState] = useContext(ProviderContext);

        const setFieldsState = (data: any) => {
            setState((state) => ({ ...state, ...data }));
        };

        const setFieldState = <K extends keyof T>(key: K, value: T[K]) => {
            setState((state) => ({ ...state, [key]: value }));
        };

        return {
            setState,
            setFieldState,
            setFieldsState,
        };
    };

    const WrapProvider: React.FC<Children<T>> = ({ children, params = {} }) => {
        const value = useState({ ...initialState, ...params });

        return (
            <ProviderContext.Provider value={value}>
                {children}
            </ProviderContext.Provider>
        );
    };

    return {
        ProviderContext,
        useProvider,
        WrapProvider,
        useProviderSetter,
    };
};
