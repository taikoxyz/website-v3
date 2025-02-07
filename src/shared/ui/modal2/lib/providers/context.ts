import { createContext } from "react";
import { IModalContext } from "../types";

export const ModalContext = createContext<IModalContext>({
    modals: [],
    openModal: () => null,
    toggleModal: () => null,
    getModal: () => null,
    addToList: () => null,
    removeFromList: () => null,
    closeModal: () => null,  
    closeAllModals: () => null
});