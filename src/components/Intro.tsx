import { useState, useEffect } from "react";
import { sculptureList } from "../data";
import client from "../services/contentfulClient";

import React from 'react'

function Gallery() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleNextClick() {
		setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
	}

	function handlePrevClick() {
		setIndex((prevIndex) => (prevIndex - 1 + sculptureList.length) % sculptureList.length);
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];

	return (
		<>
			<button onClick={handlePrevClick}>Previous</button>
			<button onClick={handleNextClick}>Next</button>
			<h2>
				<i>{sculpture.name}</i>
				by {sculpture.artist}
			</h2>
			<h3>({index + 1} of {sculptureList.length})</h3>
			<button onClick={handleMoreClick}>Show More</button>
			{showMore && <p>{sculpture.description}</p>}
			<img src={sculpture.url} alt={sculpture.alt} />
		</>
	);
}

function Form() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFirstName(e.target.value);
	}

	function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLastName(e.target.value);
	}

	function handleReset() {
		setFirstName('');
		setLastName('');
	}

	return (
		<form onSubmit={e => e.preventDefault()}>
			<input
				placeholder="First name"
				value={firstName}
				onChange={handleFirstNameChange}
			/>
			<input
				placeholder="Last name"
				value={lastName}
				onChange={handleLastNameChange}
			/>
			<h1>Hi, {firstName} {lastName}</h1>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}

function FeedbackForm() {
	const [isSent, setIsSent] = useState(false);
	const [message, setMessage] = useState('');

	if (isSent) {
		return <h1>Thank you!</h1>;
	}

	return (
		<form onSubmit={e => {
			e.preventDefault();
			alert(`Sending: "${message}"`);
			setIsSent(true);
		}}>
			<textarea
				placeholder="Message"
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
			<br />
			<button type="submit">Send</button>
		</form>
	);
}

function PromptForm() {
	const [name, setName] = useState('');

	function handleClick() {
		const userName = prompt('What is your name?') ?? "";
		setName(userName);
		alert(`Hello, ${userName}!`);
	}

	return (
		<button onClick={handleClick}>
			Greet
		</button>
	);
}

const Intro: React.FC = () => {
	const [entries, setEntries] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getEntries = async () => {
			try {
				const response = await client.getEntries({content_type: "intro"});
				setEntries(response.items);
				console.log(response);
			} catch (error) {
				console.error("Error fetching content:", error);
			} finally{
				setLoading(false);
			}
		};

		getEntries();
	}, []);



	return (
		<section className="intro bg-babyblue">
			<div className="container mx-auto">
				{loading ? (
					<p>Loading...</p>
				):(
					<>
						{entries && entries.map((item) => (
							<div className="grid grid-cols-2 gap-5 min-h-80">
								<div className="col">
									<h3 className="uppercase playfair text-lg">{item.fields.heading}</h3>
								</div>
								<div className="col">
									<p className="playfair-italic-700 text-2xl">{item.fields.paragraph}</p>
									<p>{item.fields.outro}</p>
								</div>
							</div>
						))}
					</>

				)}
				{/* <Gallery />
				<Form />
				<FeedbackForm />
				<PromptForm /> */}
			</div>
		</section>
	);
};

export default Intro;