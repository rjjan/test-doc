import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/* https://nextjs.org/docs/pages/building-your-application/routing/internationalization */
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  //i18n: {
  // Supported locales
  //  locales: ["en", "zh-TW"],
  // Default locale
  //  defaultLocale: "zh-TW",
  //},
};

export default withMDX(config);
