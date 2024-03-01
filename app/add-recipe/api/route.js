import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req, res) {
	try {
		const recipeURL = req.body.url;
		console.log(recipeURL, "server");
		const response = await fetch(recipeURL);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const html = await response.text();
		const $ = cheerio.load(html);

		const $body = $("body").html();

		const input = $body
			//remove all classes
			.replace(/ class="[^"]*"/g, "")
			//remove all scripts
			.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
			//remove all styles
			.replace(/\sstyle\s*=\s*(['"])[^'"]*\1/gi, "")
			//remove all inline style attributes
			.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
			//remove all style tags
			.replace(/<!--[\s\S]*?-->/g, "")
			//remove all svg tags
			.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, "")
			//remove all a tags
			.replace(/<\/?a[^>]*>/gi, "")
			//remove all b, i, u, s, strike, tt, big, small, center, font, span, br, hr, div tags
			.replace(
				/<\/?(b|i|u|s|strike|tt|big|small|center|font|span|br|hr|div)(?![^>]*img)[^>]*>/gi,
				""
			)
			//remove all new line whitespace
			.replace(/\n+/g, "")
			//remove all tab whitespace
			.replace(/\t+/g, "")
			//remove all double spaces
			.replace(/\s{2,}/g, " ");

		// console.log(input);
		return NextResponse.json({ html }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
