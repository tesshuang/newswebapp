import React, { Component } from 'react';
import CallAPI from "./comp/CallAPI";
import Header from "./comp/Header";
// import MCard from "./comp/MCard";

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			countries:[
				{
					id:"us",
					name:"United States of America"
				},
				{
					id:"au",
					name:"Australia"
				}, 
				{
					id:"gb",
					name:"United Kingdom"
				}, 
				{
					id:"ca",
					name:"Canada"
				}, 
				{
					id:"cn",
					name:"China"
				},
				{
					id:"fr",
					name:"France"}, 
				{
					id:"de",
					name:"Germany"
				},
				{
					id:"jp",
					name:"Japan"
				}, 
				{
					id:"kr",
					name:"Korea"}, 
				{
					id:"nz",
					name:"New Zealand"
				},
				],
			categories:["business", "entertainment", "general", "health", "science", "sports", "technology"],
			country:"us",
			category:"business",
			news:[]
		}
		
		this.handleCategories = this.handleCategories.bind(this);
		this.handleCountries = this.handleCountries.bind(this);
		this.handleNews = this.handleNews.bind(this);
	}
	componentDidMount(){
		this.handleNews();
	}
	async handleNews(){
		try{
			const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=7cf3459491c94dc2b1fd966f9857a390`;
			let response = await fetch(url);
			let data = await response.json();
			this.setState({
				news: data.articles
			});
		} catch (error) {
			console.log(error);
		}
		
		// fetch(url)
		// 	.then(resp => resp.json())
		// 	.then(data => {
		// 		this.setState({
		// 			news: data.articles
		// 		});
		// 	})
		// 	.catch((error) => console.log(error));
	}
	handleCategories(arg){
		this.setState({
			category: arg
		})
	}
	handleCountries(arg){
		this.setState({
			country: arg
		})
	}
	render() {
		return (
			<div >
				<Header 
					categories={this.state.categories}
					countries={this.state.countries}
					handleCategories={this.handleCategories}
					handleCountries={this.handleCountries}
					handleNews={this.handleNews}/>
				<CallAPI 
					category={this.state.category}
					news={this.state.news}/>
			</div>
		);
	}
}

export default App;
