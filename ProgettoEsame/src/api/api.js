// src/api/api.js

//DA RIVEDERE PER LE FETCH
// src/api/api.js
import axios from "axios";

// Base URL dalla variabile d'ambiente
const API_BASE_URL = import.meta.env.VITE_DND_API_BASE_URL;

// Istanza di Axios con timeout globale di 5 secondi
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 5000 ms = 5 secondi
});

export const fetchRaces = async () => {
  try {
    const response = await api.get("/v2/races");
    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout durante il caricamento delle razze.");
    }
    throw error;
  }
};

export const fetchClasses = async () => {
  try {
    const response = await api.get("/v1/classes");
    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout durante il caricamento delle classi.");
    }
    throw error;
  }
};

export const fetchRaceByIndex = async (index) => {
  try {
    const response = await api.get(`/v2/races/${index}`);
    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout durante il caricamento della razza.");
    }
    throw error;
  }
};

export const fetchClassByIndex = async (index) => {
  try {
    const response = await api.get(`/v1/classes/${index}`);
    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout durante il caricamento della classe.");
    }
    throw error;
  }
};

export const fetchSpells = async (name) => {
  try {
    const response = await api.get("/v1/spells", { params: { name } });
    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout durante il caricamento degli incantesimi.");
    }
    throw error;
  }
};

export const fetchEquipment = async () => {
  try {
    const response = await api.get("/v1/magicitems");
    return response.data;
    // Per armi o armature: cambia in "/v2/armor" o "/v2/weapons" se serve
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout durante il caricamento dell'equipaggiamento.");
    }
    throw error;
  }
};

export const fetchTalents = async () => {
  try {
    const response = await api.get("/v2/feats");
    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Timeout durante il caricamento dei talenti.");
    }
    throw error;
  }
};

export default api;

// export const fetchPostsApi = () =>
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => {
//       if (!res.ok) throw new Error('Errore fetch');

//       return res.json();
//     });

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Thunk asincrono usando fetch
// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) throw new Error('Errore nella fetch!');
//     return response.json(); // qui non serve .data, fetch restituisce già il json
//   }
// );

// // Slice Redux come già visto
// const postsSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     list: [],
//     status: 'idle',
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.list = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export const postsReducer = postsSlice.reducer;

// src/api/api.js
