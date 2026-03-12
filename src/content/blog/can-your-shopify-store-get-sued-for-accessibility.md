---
title: "Can Your Shopify Store Get Sued for Accessibility?"
description: "ADA web accessibility lawsuits topped 4,000 in 2023 and e-commerce is the #1 target. Here's what Shopify merchants need to know about legal risk."
date: 2026-03-12
tags: ["accessibility", "legal", "ada"]
---

Over 4,000 ADA web accessibility lawsuits were filed in the US in 2023 alone. E-commerce stores are the most common target, and Shopify powers millions of them. If your store isn't accessible, you're exposed — and most merchants don't find out until a demand letter shows up.

## Who's filing these lawsuits?

Most ADA web accessibility cases come from a small number of law firms that specialize in serial litigation. They use automated scanning tools to find stores with obvious violations — missing alt text on images, forms without labels, buttons that can't be reached by keyboard — and file complaints on behalf of plaintiffs with disabilities.

These aren't frivolous cases. The Americans with Disabilities Act requires businesses that serve the public to be accessible, and courts have consistently ruled that websites count as "places of public accommodation." The Department of Justice confirmed this explicitly in 2022, and a 2024 final rule cemented web accessibility under Title II for state and local governments.

For private businesses (which includes every Shopify store), Title III applies. There's no specific technical standard written into the ADA, but courts overwhelmingly point to WCAG 2.1 AA as the benchmark. If your store doesn't meet it, you're vulnerable.

## What does a lawsuit actually look like?

A typical case starts with a demand letter. A law firm sends a letter saying their client — a person with a disability — tried to use your website and couldn't. They encountered barriers: images without descriptions, buttons that didn't work with a screen reader, forms they couldn't fill out.

The letter demands you fix the issues and pay damages, usually somewhere between $5,000 and $25,000 for a first offense. Many merchants settle quickly because fighting it costs more than paying.

If you don't settle, it goes to court. Litigation costs climb fast — $10,000 to $50,000 in legal fees is common even for straightforward cases. And the court will likely order you to fix the accessibility issues anyway, plus pay the plaintiff's legal costs.

Some states make this worse. California's Unruh Civil Rights Act allows statutory damages of $4,000 per violation per visit. New York is the single biggest source of web accessibility lawsuits in the country, accounting for roughly 60% of all federal filings.

## It's not just the US anymore

The European Accessibility Act (EAA) took effect in June 2025, requiring all e-commerce businesses selling to EU customers to meet accessibility standards. This applies to any Shopify store that ships to Europe — your business doesn't need to be based in the EU.

Canada's AODA (Accessibility for Ontarians with Disabilities Act) has required WCAG 2.0 AA compliance for large organizations since 2021, with enforcement expanding. The UK's Equality Act has similar provisions.

The trend is global: accessibility requirements are getting stricter, not looser. Waiting to deal with this is a losing strategy.

## "I use an accessibility overlay — am I protected?"

No. Overlays like accessiBe, UserWay, and AudioEye add a widget to your storefront that claims to fix accessibility issues automatically with JavaScript. Courts have repeatedly found these insufficient.

In *Murphy v. Eyebobs LLC* (2023), the court rejected the argument that an overlay made the site accessible. In *Langer v. Banana Republic* and multiple other cases, overlays were present on the defendant's site at the time of the lawsuit — and the cases proceeded anyway. The National Federation of the Blind has publicly opposed overlay products, calling them barriers rather than solutions.

The core problem: overlays try to patch issues at runtime without fixing the underlying HTML. A screen reader still encounters the broken markup. An image without alt text in your theme code still has no alt text — the overlay just guesses what it might be. Keyboard navigation issues in your theme's JavaScript don't get magically fixed by a toolbar widget.

If you're paying for an overlay and assuming you're covered, you're spending money on a false sense of security.

## What actually makes a Shopify store accessible?

WCAG 2.1 AA is the standard. It covers four principles: content must be perceivable, operable, understandable, and robust. For a typical Shopify store, the most common failures are:

**Missing alt text on images.** Every product image, banner, and decorative image needs appropriate alt text (or an empty alt attribute if it's purely decorative). Shopify makes this easy — there's an alt text field on every image in the admin. Most merchants just never fill it in.

**Poor color contrast.** Text needs a contrast ratio of at least 4.5:1 against its background (3:1 for large text). Many Shopify themes use light gray text on white backgrounds, trendy low-contrast color schemes, or thin fonts that make contrast problems worse.

**Forms without labels.** Newsletter signup forms, contact forms, login forms — if the input fields don't have proper `<label>` elements associated with them, screen readers can't tell users what information to enter.

**Keyboard navigation failures.** Every interactive element (links, buttons, menus, dropdowns) needs to be reachable and usable with just a keyboard. Some Shopify themes have dropdown menus or mobile navigation that only work with a mouse.

**Missing heading structure.** Screen reader users navigate by headings. If your page jumps from an H1 to an H4, or uses headings purely for visual styling, it creates a confusing experience.

The good news: most of these are fixable through Shopify's Theme Editor or with small changes to your theme's Liquid templates. You don't need to rebuild your store.

## How to find out if you're at risk

Run an accessibility scan on your storefront. Tools like axe-core (which powers most professional auditing tools) can identify the majority of machine-detectable WCAG violations in seconds.

[AccessFix](/) does exactly this for Shopify stores. Install the app, hit scan, and you'll get a compliance score plus every violation categorized by severity — with Shopify-specific fix instructions telling you exactly where to go in your Theme Editor to resolve each issue.

You don't need to guess whether your store is accessible. You can know in under a minute.

## What to do right now

Start with the basics. Open your Shopify admin and check whether your product images have alt text. Look at your theme's color scheme and ask whether light gray text on a white background is actually readable. Try navigating your store using only your keyboard — press Tab repeatedly and see if you can reach every link and button.

If you want a comprehensive picture, [run a free scan with AccessFix](/). The scan covers up to 20 pages of your storefront and identifies every detectable WCAG violation. Fix the critical issues first — missing alt text and form labels are usually the quickest wins.

Accessibility compliance isn't optional anymore. The law is clear, enforcement is growing, and the fixes are simpler than you think. Don't wait for a demand letter to find out your store has problems.

Need help getting started? Check our [setup guide and FAQ](/support) for step-by-step instructions.
