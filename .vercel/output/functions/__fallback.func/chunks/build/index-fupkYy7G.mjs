import { defineComponent, withAsyncContext, unref, ref, mergeProps, reactive, useSSRContext, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, isRef, computed, toValue, onServerPrefetch, nextTick, toRef } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { G as withoutTrailingSlash, x as publicAssetsURL, m as getRequestHeaders } from '../nitro/nitro.mjs';
import { debounce } from 'perfect-debounce';
import { t as tryUseNuxtApp, u as useNuxtApp, a as asyncDataDefaults, c as createError } from './server.mjs';
import { u as useHead } from './composables-Ci6CEbR2.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const activeId = ref("events");
    const menuOpen = ref(false);
    const links = [
      { id: "events", label: "Events" },
      { id: "music", label: "Our Music" },
      { id: "members", label: "Members" },
      { id: "about", label: "About" },
      { id: "support", label: "Support" },
      { id: "contact", label: "Contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["nav", { "menu-open": unref(menuOpen) }]
      }, _attrs))}><div class="nav-inner"><a href="#top" class="brand"><span class="mark"></span><span><span class="word">Fairy</span> <span class="dot">✚</span> <span class="word">Butchers</span></span></a><div class="nav-links"><!--[-->`);
      ssrRenderList(links, (l) => {
        _push(`<a${ssrRenderAttr("href", `#${l.id}`)} class="${ssrRenderClass({ active: unref(activeId) === l.id })}">${ssrInterpolate(l.label)}</a>`);
      });
      _push(`<!--]--></div><button class="nav-cta" type="button">Get Tickets ✚</button><button class="nav-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="Toggle menu">${ssrInterpolate(unref(menuOpen) ? "×" : "☰")}</button></div></nav>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$a, { __name: "AppNav" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AppHero",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "top",
        class: "hero"
      }, _attrs))}><div class="hero-photo" aria-hidden="true"></div><div class="hero-text"><div class="hero-eyebrow">${ssrInterpolate(__props.data.eyebrow)}</div><h1><span class="stamp">${ssrInterpolate(__props.data.titleLine1)}</span><span class="pink stamp">${ssrInterpolate(__props.data.titleLine2)}</span></h1><p class="hero-tag">${__props.data.tagHtml ?? ""}</p><div class="hero-actions"><button class="btn btn-primary" type="button">${ssrInterpolate(__props.data.primaryCta)}</button><button class="btn btn-ghost" type="button">${ssrInterpolate(__props.data.ghostCta)}</button></div></div><div class="hero-ribbon"><div class="ribbon-tag">${ssrInterpolate(__props.data.ribbonTag)}</div><div class="ribbon-marquee"><!--[-->`);
      ssrRenderList([...__props.data.ribbonItems, ...__props.data.ribbonItems], (item, i) => {
        _push(`<span>${ssrInterpolate(item)}</span>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$9, { __name: "AppHero" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MarqueeBand",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "marquee-band" }, _attrs))}><div class="track"><!--[-->`);
      ssrRenderList(Array.from({ length: 6 }, (_, k) => __props.items[k % __props.items.length]), (item, i) => {
        _push(`<span>${ssrInterpolate(item)} <span class="star">✚</span></span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarqueeBand.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$8, { __name: "MarqueeBand" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SectionHead",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    sub: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-head" }, _attrs))}><div><div class="section-num">${ssrInterpolate(__props.eyebrow)}</div><h2 class="section-title">${__props.title.replace(/\n/g, "<br>") ?? ""}</h2></div><p class="section-sub">${ssrInterpolate(__props.sub)}</p></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHead.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$7, { __name: "SectionHead" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SectionEvents",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "events" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: __props.data.eyebrow,
        title: __props.data.title,
        sub: __props.data.sub
      }, null, _parent));
      _push(`<div class="gigs"><!--[-->`);
      ssrRenderList(__props.data.items, (gig, i) => {
        _push(`<a class="${ssrRenderClass([{ "sold-out": gig.soldOut }, "gig"])}"${ssrRenderAttr("href", gig.href ?? "#")}><div class="gig-date"><span class="month">${ssrInterpolate(gig.monthLabel)}</span>${ssrInterpolate(gig.day)}</div><div class="gig-venue"><span class="name">${ssrInterpolate(gig.venue)} `);
        if (gig.tag) {
          _push(`<span class="${ssrRenderClass([{ soldout: gig.tagKind === "soldout" }, "gig-tag"])}">${ssrInterpolate(gig.tag)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><span class="city">${ssrInterpolate(gig.city)}</span></div><div class="gig-meta">${ssrInterpolate(gig.meta)}<span class="price">${ssrInterpolate(gig.price)}</span></div><div class="gig-arrow">${ssrInterpolate(gig.soldOut ? "×" : "→")}</div></a>`);
      });
      _push(`<!--]--></div><div class="cleaver-sep">${ssrInterpolate(__props.data.archiveLabel)}</div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionEvents.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$6, { __name: "SectionEvents" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SectionMusic",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    function thumbStyle(v) {
      if (!v.thumb) return void 0;
      return {
        backgroundImage: `url('${v.thumb}')`,
        backgroundPosition: v.thumbPosition ?? "center"
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "music" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: __props.data.eyebrow,
        title: __props.data.title,
        sub: __props.data.sub
      }, null, _parent));
      _push(`<div class="music-grid"><!--[-->`);
      ssrRenderList(__props.data.items, (v, i) => {
        _push(`<a class="${ssrRenderClass([{ featured: v.featured }, "video-card"])}"${ssrRenderAttr("href", v.href ?? "#")}><div class="placeholder-thumb"></div>`);
        if (v.thumb) {
          _push(`<div class="thumb" style="${ssrRenderStyle(thumbStyle(v))}"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (v.badge) {
          _push(`<span class="badge">${ssrInterpolate(v.badge)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="play"></div><div class="info"><div class="title-line">${ssrInterpolate(v.title)}</div><div class="meta"><span>${ssrInterpolate(v.kind)}</span><span class="pink">${ssrInterpolate(v.length)}</span>`);
        if (v.year) {
          _push(`<span>${ssrInterpolate(v.year)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></a>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionMusic.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$5, { __name: "SectionMusic" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SectionMembers",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "members" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: __props.data.eyebrow,
        title: __props.data.title,
        sub: __props.data.sub
      }, null, _parent));
      _push(`<div class="member-grid"><!--[-->`);
      ssrRenderList(__props.data.items, (m) => {
        _push(`<article class="member"><div class="member-photo"${ssrRenderAttr("data-label", m.photo ? "" : "[ DROP MEMBER PHOTO ]")} style="${ssrRenderStyle(m.photo ? { backgroundImage: `url('${m.photo}')`, backgroundSize: "cover", backgroundPosition: "center" } : void 0)}"><span class="number">${ssrInterpolate(m.number)}</span></div><div class="member-info"><h3 class="stage-name">${ssrInterpolate(m.stageName)}</h3><div class="real">${ssrInterpolate(m.aka)}</div><div class="role">${ssrInterpolate(m.role)}</div></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionMembers.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$4, { __name: "SectionMembers" });
const _imports_0 = publicAssetsURL("/assets/logo-circle.jpeg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SectionAbout",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "about" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: __props.data.eyebrow,
        title: __props.data.title,
        sub: __props.data.sub
      }, null, _parent));
      _push(`<div class="about-grid"><div class="about-text"><!--[-->`);
      ssrRenderList(__props.data.paragraphs, (p, i) => {
        _push(`<p>${ssrInterpolate(p)}</p>`);
      });
      _push(`<!--]--><div class="about-stats"><!--[-->`);
      ssrRenderList(__props.data.stats, (s) => {
        _push(`<div class="stat"><div class="num">${ssrInterpolate(s.num)}</div><div class="label">${ssrInterpolate(s.label)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="about-logo"><img${ssrRenderAttr("src", _imports_0)} alt="Fairy Butchers logo"></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionAbout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$3, { __name: "SectionAbout" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SectionSupport",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "support" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: __props.data.eyebrow,
        title: __props.data.title,
        sub: __props.data.sub
      }, null, _parent));
      _push(`<div class="support-grid"><!--[-->`);
      ssrRenderList(__props.data.cards, (card) => {
        _push(`<div class="support-card"><div class="icon-stamp">${ssrInterpolate(card.iconStamp)}</div><div class="kicker">${ssrInterpolate(card.kicker)}</div><h3>${ssrInterpolate(card.heading)}</h3><p>${ssrInterpolate(card.blurb)}</p><ul><!--[-->`);
        ssrRenderList(card.bullets, (b) => {
          _push(`<li>${ssrInterpolate(b)}</li>`);
        });
        _push(`<!--]--></ul><a class="${ssrRenderClass([card.ctaStyle === "primary" ? "btn-primary" : "btn-ghost", "btn"])}"${ssrRenderAttr("href", card.ctaHref)}>${ssrInterpolate(card.ctaLabel)}</a></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionSupport.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "SectionSupport" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionContact",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const form = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const sent = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: __props.data.eyebrow,
        title: __props.data.title,
        sub: __props.data.sub
      }, null, _parent));
      _push(`<div class="contact-grid"><form class="contact-form"><div><label for="contact-name">Name</label><input id="contact-name"${ssrRenderAttr("value", unref(form).name)} required placeholder="Your name"></div><div class="row"><div><label for="contact-email">Email</label><input id="contact-email"${ssrRenderAttr("value", unref(form).email)} required type="email" placeholder="you@somewhere.ch"></div><div><label for="contact-subject">Subject</label><select id="contact-subject"><!--[-->`);
      ssrRenderList(__props.data.subjects, (s) => {
        _push(`<option${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>${ssrInterpolate(s)}</option>`);
      });
      _push(`<!--]--></select></div></div><div><label for="contact-message">Message</label><textarea id="contact-message" required placeholder="Tell us what&#39;s up.">${ssrInterpolate(unref(form).message)}</textarea></div><div><button type="submit" class="btn btn-primary">${ssrInterpolate(unref(sent) ? "Sent ✚" : "Send it ✚")}</button></div></form><aside class="contact-info"><h4>${ssrInterpolate(__props.data.infoTitle)}</h4><p>${ssrInterpolate(__props.data.infoBlurb)}</p><!--[-->`);
      ssrRenderList(__props.data.channels, (c) => {
        _push(`<!--[--><div class="channel">${ssrInterpolate(c.label)}</div><div class="value">${ssrInterpolate(c.value)}</div><!--]-->`);
      });
      _push(`<!--]--></aside></div><div class="footer-bottom"><div>${ssrInterpolate(__props.data.footerNote)}</div><div class="socials"><!--[-->`);
      ssrRenderList(__props.data.socials, (s) => {
        _push(`<a${ssrRenderAttr("href", s.href)}${ssrRenderAttr("title", s.title)}>${ssrInterpolate(s.label)}</a>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionContact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "SectionContact" });
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function defineKeyedFunctionFactory(factory) {
  const placeholder = function() {
    throw new Error(`[nuxt] \`${factory.name}\` is a compiler macro and cannot be called at runtime.`);
  };
  return Object.defineProperty(placeholder, "__nuxt_factory", {
    enumerable: false,
    get: () => factory.factory
  });
}
const createUseAsyncData = defineKeyedFunctionFactory({
  name: "createUseAsyncData",
  factory(options = {}) {
    function useAsyncData2(...args) {
      const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
      if (_isAutoKeyNeeded(args[0], args[1])) {
        args.unshift(autoKey);
      }
      let [_key, _handler, opts = {}] = args;
      const isKeyReactive = isRef(_key) || typeof _key === "function";
      const key = isKeyReactive ? computed(() => toValue(_key)) : { value: _key };
      if (!key.value || typeof key.value !== "string") {
        throw new TypeError("[nuxt] [useAsyncData] key must be a non-empty string.");
      }
      if (typeof _handler !== "function") {
        throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
      }
      const shouldFactoryOptionsOverride = typeof options === "function";
      const nuxtApp = useNuxtApp();
      const factoryOptions = shouldFactoryOptionsOverride ? options(opts) : options;
      if (!shouldFactoryOptionsOverride) {
        for (const key2 in factoryOptions) {
          if (factoryOptions[key2] === void 0) {
            continue;
          }
          if (opts[key2] !== void 0) {
            continue;
          }
          opts[key2] = factoryOptions[key2];
        }
      }
      opts.server ??= true;
      opts.default ??= getDefault;
      opts.getCachedData ??= getDefaultCachedData;
      opts.lazy ??= false;
      opts.immediate ??= true;
      opts.deep ??= asyncDataDefaults.deep;
      opts.dedupe ??= "cancel";
      if (shouldFactoryOptionsOverride) {
        for (const key2 in factoryOptions) {
          if (factoryOptions[key2] === void 0) {
            continue;
          }
          opts[key2] = factoryOptions[key2];
        }
      }
      nuxtApp._asyncData[key.value];
      function createInitialFetch() {
        const initialFetchOptions = { cause: "initial", dedupe: opts.dedupe };
        const existing = nuxtApp._asyncData[key.value];
        if (!existing?._init) {
          initialFetchOptions.cachedData = opts.getCachedData(key.value, nuxtApp, { cause: "initial" });
          nuxtApp._asyncData[key.value] = buildAsyncData(nuxtApp, key.value, _handler, opts, initialFetchOptions.cachedData);
          nuxtApp._asyncData[key.value]._initialCachedData = initialFetchOptions.cachedData;
        } else {
          initialFetchOptions.cachedData = existing._initialCachedData;
        }
        return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
      }
      const initialFetch = createInitialFetch();
      const asyncData = nuxtApp._asyncData[key.value];
      asyncData._deps++;
      const fetchOnServer = opts.server !== false && nuxtApp.payload.serverRendered;
      if (fetchOnServer && opts.immediate) {
        const promise = initialFetch();
        if (getCurrentInstance()) {
          onServerPrefetch(() => promise);
        } else {
          nuxtApp.hook("app:created", async () => {
            await promise;
          });
        }
      }
      const asyncReturn = {
        data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
        pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
        status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
        error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
        refresh: (...args2) => {
          if (!nuxtApp._asyncData[key.value]?._init) {
            const initialFetch2 = createInitialFetch();
            return initialFetch2();
          }
          return nuxtApp._asyncData[key.value].execute(...args2);
        },
        execute: (...args2) => asyncReturn.refresh(...args2),
        clear: () => {
          const entry = nuxtApp._asyncData[key.value];
          if (entry?._abortController) {
            try {
              entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
            } finally {
              entry._abortController = void 0;
            }
          }
          clearNuxtDataByKey(nuxtApp, key.value);
        }
      };
      const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
      Object.assign(asyncDataPromise, asyncReturn);
      Object.defineProperties(asyncDataPromise, {
        then: { enumerable: true, value: asyncDataPromise.then.bind(asyncDataPromise) },
        catch: { enumerable: true, value: asyncDataPromise.catch.bind(asyncDataPromise) },
        finally: { enumerable: true, value: asyncDataPromise.finally.bind(asyncDataPromise) }
      });
      return asyncDataPromise;
    }
    return useAsyncData2;
  }
});
const useAsyncData = createUseAsyncData.__nuxt_factory();
createUseAsyncData.__nuxt_factory({
  lazy: true,
  // @ts-expect-error private property
  _functionName: "useLazyAsyncData"
});
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
    nuxtApp._asyncData[key]._initialCachedData = void 0;
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function buildAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        if (nuxtApp._asyncDataPromises[key] === promise) {
          delete nuxtApp._asyncDataPromises[key];
        }
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const checksums = {
  "site": "v3.5.0--A6QQlqWMiuJXj12Xqi1aJsx_UtFkRc5qvRHcy5VY6xE",
  "events": "v3.5.0--UWPbya8zvSHwv5Amfm2in9c8-kHkVHIuO6OYIClUshU",
  "music": "v3.5.0--JWn1hd0njeOVhZYSaUSKIO3upvmieJ-7iRdl-9rRYRU",
  "members": "v3.5.0--bTunZp8kuDRWdUQJYqDSucNBtVoJb28Xoyxc7e5IsEc",
  "sponsors": "v3.5.0--7f91oUnDY8TU4_T72TSCqtE4crUaEebGG8ED8guqz3A"
};
const tables = {
  "site": "_content_site",
  "events": "_content_events",
  "music": "_content_music",
  "members": "_content_members",
  "sponsors": "_content_sponsors",
  "info": "_content_info"
};
const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts?.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = opts?.limit || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}
async function fetchContent(event, collection, path, options) {
  const headers = event ? getRequestHeaders(event) : {};
  headers["accept-encoding"] = void 0;
  const url = `/__nuxt_content/${collection}/${path}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    },
    query: { v: checksums[String(collection)], t: void 0 }
  };
  return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchQuery(event, collection, sql) {
  return fetchContent(event, collection, "query", {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: {
      sql
    }
  });
}
const queryCollection = (collection) => {
  const event = tryUseNuxtApp()?.ssrContext?.event;
  return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
async function executeContentQuery(event, collection, sql) {
  {
    return fetchQuery(event, String(collection), sql);
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: site } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("site", () => queryCollection("site").first())), __temp = await __temp, __restore(), __temp);
    const { data: events } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("events", () => queryCollection("events").first())), __temp = await __temp, __restore(), __temp);
    const { data: music } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("music", () => queryCollection("music").first())), __temp = await __temp, __restore(), __temp);
    const { data: members } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("members", () => queryCollection("members").first())), __temp = await __temp, __restore(), __temp);
    const { data: sponsors } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("sponsors", () => queryCollection("sponsors").first())), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Fairy Butchers — Raw · Loud · Bloody Good",
      meta: [
        { name: "description", content: "Fairy Butchers — a rock band from Switzerland. Shows, music, and how to feed the beast." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNav = __nuxt_component_0$1;
      const _component_AppHero = __nuxt_component_1;
      const _component_MarqueeBand = __nuxt_component_2;
      const _component_SectionEvents = __nuxt_component_3;
      const _component_SectionMusic = __nuxt_component_4;
      const _component_SectionMembers = __nuxt_component_5;
      const _component_SectionAbout = __nuxt_component_6;
      const _component_SectionSupport = __nuxt_component_7;
      const _component_SectionContact = __nuxt_component_8;
      if (unref(site) && unref(events) && unref(music) && unref(members) && unref(sponsors)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><aside class="side-label">${ssrInterpolate(unref(site).sideLabel)}</aside>`);
        _push(ssrRenderComponent(_component_AppNav, null, null, _parent));
        _push(ssrRenderComponent(_component_AppHero, {
          data: unref(site).hero
        }, null, _parent));
        _push(ssrRenderComponent(_component_MarqueeBand, {
          items: unref(site).marquee
        }, null, _parent));
        _push(ssrRenderComponent(_component_SectionEvents, { data: unref(events) }, null, _parent));
        _push(ssrRenderComponent(_component_SectionMusic, { data: unref(music) }, null, _parent));
        _push(ssrRenderComponent(_component_SectionMembers, { data: unref(members) }, null, _parent));
        _push(ssrRenderComponent(_component_SectionAbout, {
          data: unref(site).about
        }, null, _parent));
        _push(ssrRenderComponent(_component_SectionSupport, { data: unref(sponsors) }, null, _parent));
        _push(ssrRenderComponent(_component_SectionContact, {
          data: unref(site).contact
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fupkYy7G.mjs.map
