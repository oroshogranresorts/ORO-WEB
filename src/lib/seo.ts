export const SITE_URL = "https://www.oroshogran.com";

export function getAbsoluteUrl(path: string = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
