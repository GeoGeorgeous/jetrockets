import { saveToCookies } from '$lib/utils.js';
import { defineContext } from './state.svelte.js';

export const CONFIG_COOKIE_NAME = 'config';

const defaultConfig = {
  version: '1',
  user: { name: '', avatar: '' },
  ui: { borderless: false },
};

class ConfigState {
  #config = $state(defaultConfig);

  constructor(initialConfig) {
    this.#config = { ...defaultConfig, ...initialConfig };

    $effect(() => {
      saveToCookies(CONFIG_COOKIE_NAME, this.#config);
    });
  }

  get ui() {
    return this.#config.ui;
  }
  set ui(value) {
    this.#config.ui = value;
  }

  get user() {
    return this.#config.user;
  }
  set user(value) {
    this.#config.user = value;
  }

  get version() {
    return this.#config.version;
  }

  get config() {
    return this.#config;
  }
}

const { setState: setConfig, getState: getConfig } = defineContext('config', ConfigState);
export { setConfig, getConfig };

export function parseConfig(cookieString) {
  if (!cookieString) return defaultConfig;

  try {
    const decoded = atob(cookieString);
    const parsed = JSON.parse(decoded);

    return {
      version: parsed.version || defaultConfig.version,
      user: { ...defaultConfig.user, ...(parsed.user || {}) },
      ui: { ...defaultConfig.ui, ...(parsed.ui || {}) },
    };
  } catch {
    return defaultConfig;
  }
}
