import { getLocale } from "next-intl/server";

export async function getLanguage() {
	if (typeof window === "undefined") {
		const locale = await getLocale();
		return locale || "en"; 
	} else {
		const pathname = window.location.pathname;
		return pathname?.split("/")[1] || "en";
	}
}
