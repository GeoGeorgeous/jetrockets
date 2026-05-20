import { readFromLocalStorage, writeToLocalStorage } from '$lib/utils.js';
import { defineContext } from './state.svelte.js';

class AuthState {
  isAuthed = $state(false);

  constructor() {
    this.isAuthed = readFromLocalStorage('isAuthed') ?? false;

    $effect(() => {
      writeToLocalStorage('isAuthed', this.isAuthed);
    });
  }

  login() {
    this.isAuthed = true;
  }

  logout() {
    this.isAuthed = false;
  }
}

const { setState: setAuth, getState: getAuth } = defineContext('auth', AuthState);
export { setAuth, getAuth };
