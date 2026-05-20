import { CONFIG_COOKIE_NAME, parseConfig } from '$state/config.svelte.js';

export function load({ cookies }) {
  const configCookie = cookies.get(CONFIG_COOKIE_NAME);
  const config = parseConfig(configCookie);

  return {
    config,
  };
}
