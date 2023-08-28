/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro.1ad41423.mjs';
import 'html-escaper';
import { $ as $$Layout, a as $$Navbar } from './index.astro.808fbd8f.mjs';
/* empty css                              */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Waitlistform = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Waitlistform;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
      console.log(name);
      console.log(email);
      await fetch("http://127.0.0.1:5000/add_user_to_waitlist", {
        method: "POST",
        body: data
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="card flex items-center bg-[#1E1E1E] rounded-md astro-X2D6P43P">
  <form method="post" class="flex w-full h-full flex-col justify-center items-center astro-X2D6P43P">
    <div class="flex flex-col mb-10 astro-X2D6P43P">
      <label for="name" class="text-[#ffffff] mb-5 astro-X2D6P43P">name</label>
      <input type="text" name="name" class="bg-[#333333] w-96 h-12 px-5 text-[#ffffff] rounded-md astro-X2D6P43P" placeholder="harry potter" required>
    </div>

    <div class="flex flex-col mb-20 astro-X2D6P43P">
      <label for="email" class="text-[#ffffff] mb-5 astro-X2D6P43P">email</label>
      <input type="email" name="email" class="bg-[#333333] w-96 h-12 px-5 text-[#ffffff] rounded-md astro-X2D6P43P" placeholder="harry.potter@gmail.com" required>
    </div>
    <button type="submit" class="bg-[#DC143C] text-[#ffffff] px-20 py-5 rounded-md astro-X2D6P43P">join the waitlist</button>
  </form>
</div>`;
}, "/Users/chandu/Documents/dev/beatsai/landing_page/src/components/waitlistform.astro", void 0);

const $$Astro = createAstro();
const $$Waitlist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Waitlist;
  return renderTemplate`${maybeRenderHead()}<div class="h-screen bg-[url('/background.webp')] flex flex-col items-center">
  ${renderComponent($$result, "Layout", $$Layout, { "title": "waitlist | beats.ai" })}
  ${renderComponent($$result, "Navbar", $$Navbar, {})}

  <h1 class="text-[#ffffff] text-lg mb-10">
    join the waitlist. get updates on development of beats.ai
  </h1>
  ${renderComponent($$result, "Waitlistform", $$Waitlistform, {})}
</div>`;
}, "/Users/chandu/Documents/dev/beatsai/landing_page/src/pages/waitlist.astro", void 0);

const $$file = "/Users/chandu/Documents/dev/beatsai/landing_page/src/pages/waitlist.astro";
const $$url = "/waitlist";

export { $$Waitlist as default, $$file as file, $$url as url };
