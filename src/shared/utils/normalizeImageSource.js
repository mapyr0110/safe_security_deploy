const IMAGE_FILE_PATTERN = /([^/\\?#]+\.(?:jpe?g|png|webp|gif|svg))(\?.*)?$/i;

function frontendImagePath(fileName, search = "") {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const path = `images/${fileName}${search || ""}`;
  return normalizedBase === "/" ? `/${path}` : `${normalizedBase}${path}`;
}

export function normalizeImageSource(source) {
  if (!source || typeof window === "undefined") return source;

  const value = source.trim();
  if (!value) return value;

  const imageMatch = value.match(IMAGE_FILE_PATTERN);

  try {
    const url = new URL(value, window.location.origin);
    if (url.pathname.includes("/media/")) {
      const fileName = url.pathname.split("/").pop();
      return fileName ? frontendImagePath(fileName, url.search) : value;
    }
    if (imageMatch && url.origin === window.location.origin) {
      return frontendImagePath(imageMatch[1], imageMatch[2]);
    }
  } catch {
    if (imageMatch) return frontendImagePath(imageMatch[1], imageMatch[2]);
  }

  if (imageMatch && !/^[a-z][a-z\d+\-.]*:/i.test(value)) {
    return frontendImagePath(imageMatch[1], imageMatch[2]);
  }

  return value;
}
