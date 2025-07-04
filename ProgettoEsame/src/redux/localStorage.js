// src/redux/localStorage.js

const STORAGE_KEY = 'characterProgress';

export const saveProgress = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadProgress = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
};
