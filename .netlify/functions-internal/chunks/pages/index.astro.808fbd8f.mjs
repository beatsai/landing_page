/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent } from '../astro.1ad41423.mjs';
import 'html-escaper';
/* empty css                           */
const logo = "/logo.png";

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 flex items-center justify-center mb-10">
  <a href="/">
    <img${addAttribute(logo, "src")} alt="logo" class="w-36 mt-10">
  </a>
</div>`;
}, "/Users/chandu/Documents/dev/beatsai/landing_page/src/components/navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/logo-trans.png">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
  ${renderHead()}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "/Users/chandu/Documents/dev/beatsai/landing_page/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Waitlistbutton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Waitlistbutton;
  return renderTemplate`${maybeRenderHead()}<a href="/waitlist" class="connect-spotify py-5 px-24 rounded-md bg-[#DC143C] text-[#ffffff] mr-10 astro-L5W6BJVP">join the waitlist</a>`;
}, "/Users/chandu/Documents/dev/beatsai/landing_page/src/components/waitlistbutton.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "beats.ai | ai generated playlists based on ur mood" })}

${maybeRenderHead()}<div class="h-screen bg-[url('/background.webp')]">
  ${renderComponent($$result, "Navbar", $$Navbar, {})}

  <div class="flex items-center justify-around flex-col my-30">
    <h1 class="text-7xl font-bold text-[#ffffff] text-center leading-snug mb-10">
      <span class="text-[#DC143C]">ai generated</span>
      playlists <br>
      based on ur <span class="text-[#DC143C]">mood.</span>
    </h1>
    <span class="text-xl text-[#ffffff] text-center tracking-wider mb-20">music suggestions and custom playlists based on ur music<br> taste all with
      the help of ai.
    </span>

    <div class="flex items-center justify-center w-full">
      ${renderComponent($$result, "Waitlistbutton", $$Waitlistbutton, {})}
    </div>
  </div>
</div>`;
}, "/Users/chandu/Documents/dev/beatsai/landing_page/src/pages/index.astro", void 0);

const $$file = "/Users/chandu/Documents/dev/beatsai/landing_page/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Navbar as a, index as i };
