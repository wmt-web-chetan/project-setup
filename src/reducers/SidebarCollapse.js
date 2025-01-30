import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCollapse: window.innerWidth <= 576 ? true : false,
}

export const sidebarCollapseSlice = createSlice({
    name: 'sidebarCollapse',
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.isCollapse = !state.isCollapse
        }
    }
})

export const { toggleSidebar } = sidebarCollapseSlice.actions

export default sidebarCollapseSlice.reducer