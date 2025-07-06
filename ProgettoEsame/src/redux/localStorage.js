// src/redux/localStorage.js



export const CHARACTER_PROGRESS_KEY = "characterProgress";

export const saveProgress = (data) => {
    localStorage.setItem(CHARACTER_PROGRESS_KEY, JSON.stringify(data));
};

export const loadProgress = () => {
    const data = localStorage.getItem(CHARACTER_PROGRESS_KEY);
    return data ? JSON.parse(data) : null;
};

export const clearCharacterProgress = () => {
    localStorage.removeItem(CHARACTER_PROGRESS_KEY);
};
