import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data'


const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const du = state.find(user => user.id == id);
            if (du) {
                return state.filter(ele => ele.id !== id);

            }
        }
    }
})

export const { addUser, updateUser, delteUser } = userSlice.actions;
export default userSlice.reducer;