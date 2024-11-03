import { create } from 'zustand'

const useStore = create((set) => ({
    search: {
        inputText: '',
        selectText: '',
    },

    setInputText: (inputText) =>
        set((state) => ({
            search: { ...state.search, inputText }
        })),

    setSelectText: (selectText) =>
        set((state) => ({
            search: { ...state.search, selectText }
        }))
}))

export default useStore;