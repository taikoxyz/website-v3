import { useContext } from 'react';
import { ModalContext } from './context';

export const useModal = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { addToList, removeFromList, ...context } = useContext(ModalContext);
    return context;
}

export const useModalActive = <T = unknown>(name: string) => {
    const { modals } = useModal();

    const findModal = modals.find((modal) => modal.name === name);

    if(!findModal) return null;

    return {
        name: findModal.name,
        payload: findModal.payload as T
    }
};