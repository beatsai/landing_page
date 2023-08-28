import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.1ad41423.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.b3f7533b.mjs');
const _page1  = () => import('./chunks/waitlist@_@astro.50c3ccca.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/waitlist.astro", _page1]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.e4e748d5.css"},{"type":"external","src":"/_astro/index.42140e71.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.e4e748d5.css"},{"type":"external","src":"/_astro/waitlist.43f71c9a.css"}],"routeData":{"route":"/waitlist","type":"page","pattern":"^\\/waitlist\\/?$","segments":[[{"content":"waitlist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/waitlist.astro","pathname":"/waitlist","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/chandu/Documents/dev/beatsai/landing_page/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/chandu/Documents/dev/beatsai/landing_page/src/pages/waitlist.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/waitlist.astro":"chunks/pages/waitlist.astro.33e00400.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.b3f7533b.mjs","\u0000@astro-page:src/pages/waitlist@_@astro":"chunks/waitlist@_@astro.50c3ccca.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/poppins-devanagari-400-normal.478b3ab7.woff2","/_astro/poppins-latin-400-normal.7d93459d.woff2","/_astro/poppins-latin-ext-400-normal.cb8bdeab.woff2","/_astro/poppins-latin-400-normal.2db0a254.woff","/_astro/poppins-devanagari-400-normal.aa135e25.woff","/_astro/poppins-latin-ext-400-normal.8090b590.woff","/_astro/index.e4e748d5.css","/_astro/index.42140e71.css","/_astro/waitlist.43f71c9a.css","/background.webp","/favicon.svg","/logo-trans.png","/logo.png","/pop.png","/spotify.png"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
