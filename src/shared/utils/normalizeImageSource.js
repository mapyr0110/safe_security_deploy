export function normalizeImageSource(source) {
  if (!source || typeof window === "undefined") return source;

  const value = source.trim();
  if (!value) return value;

  try {
    const url = new URL(value, window.location.origin);
    if (url.pathname.includes("/media/")) {
      const fileName = url.pathname.split("/").pop();
      return fileName ? `/images/${fileName}${url.search}` : value;
    }
  } catch {
    const match = value.match(/([^/\\]+\.(?:jpe?g|png|webp|gif|svg))(\?.*)?$/i);
    if (match) {
      return `/images/${match[1]}`;
    }
  }

  return value;
}
