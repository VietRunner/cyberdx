export type VideoQualityProfile = "ultra" | "high" | "medium" | "data-saver";

const STORAGE_KEY = "dx_video_profile";
const COOKIE_NAME = "dx_video_seen";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

interface NavigatorConnectionLike {
  effectiveType?: string;
  saveData?: boolean;
}

function getConnection(): NavigatorConnectionLike | null {
  const nav = navigator as Navigator & {
    connection?: NavigatorConnectionLike;
    mozConnection?: NavigatorConnectionLike;
    webkitConnection?: NavigatorConnectionLike;
  };
  return nav.connection ?? nav.mozConnection ?? nav.webkitConnection ?? null;
}

export function computeVideoQualityProfile(): VideoQualityProfile {
  if (typeof window === "undefined") return "medium";

  const connection = getConnection();
  const saveData = Boolean(connection?.saveData);
  const effectiveType = connection?.effectiveType ?? "";
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const longestSide = Math.max(window.innerWidth || 0, window.innerHeight || 0);

  if (saveData) return "data-saver";
  if (effectiveType.includes("2g") || effectiveType === "slow-2g") return "data-saver";
  if (effectiveType === "3g") return "medium";
  if (dpr >= 2 && longestSide >= 1900) return "ultra";
  if (dpr >= 1.5 && longestSide >= 1400) return "high";
  return "medium";
}

export function getStoredVideoQualityProfile(): VideoQualityProfile | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "ultra" || value === "high" || value === "medium" || value === "data-saver") {
    return value;
  }
  return null;
}

export function persistVideoProfile(profile: VideoQualityProfile): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, profile);
}

export function markVideoVisitor(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=1; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
}

export function getPreferredVideoProfile(): VideoQualityProfile {
  const stored = getStoredVideoQualityProfile();
  if (stored) return stored;
  const computed = computeVideoQualityProfile();
  persistVideoProfile(computed);
  return computed;
}

export function getHeroVideoSource(): string {
  const profile = getPreferredVideoProfile();
  if (profile === "data-saver") {
    return "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4";
  }
  return "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4";
}
