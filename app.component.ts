import { Component } from '@angular/core';

@Component({
  selector: 'qian-my-app',
  template: `
  <h1>My Firdddst Adddngular 2 App</h1>
  <h2>{{title}}</h2>
  <h3>{{myHero}}</h3>
  `
})

export class QianAppComponent { 
	title = 'Tour  Heroes';
  	myHero = 'Windstorm';
} 