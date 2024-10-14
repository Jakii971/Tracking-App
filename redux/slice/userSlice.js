import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const userId = auth().currentUser.uid; 
    const userDoc = await firestore().collection('users').doc(userId).get();
    if (userDoc.exists) {
        console.log('User data Slice:', userDoc.data());
        return { id: userDoc.id, ...userDoc.data() };
    } else {
        throw new Error('User not found');
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearUserData: (state) => {
            state.userData = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearUserData } = userSlice.actions;
export const selectUser = (state) => state.user.userData;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;


