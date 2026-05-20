import { browser } from '$app/environment';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const writeToLocalStorage = (key, data) => {
  if (browser) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const readFromLocalStorage = key => {
  if (browser) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
};

export const saveToCookies = (name, data) => {
  if (!browser) return;
  const str = JSON.stringify(data);
  const value = btoa(str);
  document.cookie = `${name}=${value}; path=/; max-age=31536000; SameSite=Lax;`;
};

export const getFromCookies = name => {
  if (!browser) return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    const value = match[2];
    try {
      const decoded = atob(value);
      return JSON.parse(decoded);
    } catch (e) {
      console.error('Error parsing cookie value:', e);
      return null;
    }
  }
  return null;
};

export const m2ms = minutes => minutes * 60 * 1000;
export const ms2m = ms => Math.floor(ms / 60000);
export const ms2s = ms => Math.floor((ms % 60000) / 1000);
