import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export type Burger = {
  burgerName: string;
  burgerSurName: string;
  burgerImage: string;
  burgerPrice: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'burgerApp';
  displayBurgerDetails = false;
  burgers: Burger[] = [
    {
      burgerName: 'Baconburger',
      burgerSurName: 'More Bacon',
      burgerImage: 'assets/burger-2.png',
      burgerPrice: 8.99,
    },
    {
      burgerName: 'Cheeseburger',
      burgerSurName: 'The Classic',
      burgerImage: 'assets/burger-1.png',
      burgerPrice: 7.99,
    },
    {
      burgerName: 'Veggieburger',
      burgerSurName: 'Stay Natural',
      burgerImage: 'assets/burger-3.png',
      burgerPrice: 6.99,
    },
  ];
  selectedBurger: Burger = this.burgers[0];

  openBurgerDetails() {
    this.displayBurgerDetails = true;
  }

  closeBurgerDetails() {
    this.displayBurgerDetails = false;
  }

  selectBurger(index: number) {
    this.selectedBurger = this.burgers[index];
    this.openBurgerDetails();
  }

  selectNextBurger() {
    const index = this.burgers.indexOf(this.selectedBurger);
    const newIndex = (index + 1) % this.burgers.length;
    this.displayBurgerDetails = false;
    this.selectBurger(newIndex);
  }
}
