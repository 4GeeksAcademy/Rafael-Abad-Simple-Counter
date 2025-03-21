import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";



//include images into your bundle

//create your first component
const Home = () => {

	const [seconds, setSeconds]= useState(0);
	
useEffect(()=>{
	const counter = setInterval(()=>{
		setSeconds((inSeconds)=>inSeconds+1);
	},1000);
	return ()=>clearInterval(counter);
},[
	//dependency empty, only runs once per load
]);
const formattedTime = String(seconds).padStart(6, "0");

	return (
		<div className="text-center">
			<h1><FontAwesomeIcon icon={faClock} className="clock-icon" />{formattedTime}</h1>
		</div>
	);
};

export default Home;