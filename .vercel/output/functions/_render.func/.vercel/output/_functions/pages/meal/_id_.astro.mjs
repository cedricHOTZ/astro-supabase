import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DRe_Aqwr.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_b0YlK7W9.mjs';
import { $ as $$Button } from '../../chunks/Button_BIAUcCxW.mjs';
import { PrismaClient } from '@prisma/client';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const prisma = new PrismaClient();
  const mealId = Astro2.params.id;
  if (Astro2.request.method === "POST") {
    await prisma.meal.delete({
      where: {
        id: +mealId
      }
    });
    return Astro2.redirect("/");
  }
  const meal = await prisma.meal.findUnique({
    where: {
      id: +mealId
    }
  });
  if (!meal) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const { title, description, image, imageAlt, authorName } = meal;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Datail du plat", "data-astro-cid-fv5zmkfs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-fv5zmkfs>${title}</h1> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} data-astro-cid-fv5zmkfs> <p class="paragraph" data-astro-cid-fv5zmkfs>${description}</p> <p class="paragraphe" data-astro-cid-fv5zmkfs>
Auteur:${authorName} </p> <form method="POST" data-astro-cid-fv5zmkfs> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "data-astro-cid-fv5zmkfs": true }, { "default": ($$result3) => renderTemplate`Supprimer` })} </form> ` })} `;
}, "/Users/ced/Desktop/astro-prisma/src/pages/meal/[id].astro", void 0);

const $$file = "/Users/ced/Desktop/astro-prisma/src/pages/meal/[id].astro";
const $$url = "/meal/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
