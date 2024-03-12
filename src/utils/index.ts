export const delay = (ms: number) => new Promise(resolve => setTimeout(() => resolve(true), ms));
export const handleImgName = (name: string) => name.toLowerCase().split(" ").join("-");
export const iconUrl = (name: string) => new URL(`../assets/servicesIcon/${name}.png`, import.meta.url).href;