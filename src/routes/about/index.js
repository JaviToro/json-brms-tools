import {useEffect, useState} from "preact/hooks";
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const About = () => {
	return (
		<div class={style.about}>
			<p>This tool comes from a business need and aims to make some JSON parsing tasks easier and quicker.</p>
			<p>It's been developed in JavaScript using Preact, a really fast and light alternative to React, and deployed using Vercel.</p>
			<p>Source code it's MIT licensed and can be found <a href="https://github.com/JaviToro/json-brms-tools">here</a>.</p>
		</div>
	);
}

export default About;
