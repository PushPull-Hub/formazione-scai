import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppCards } from 'src/app/models/configuration.model';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
type UserType = 'admin' | 'user' | 'company';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: AppCards[];
  isCardsLoading: boolean;
  SubscribeToLoggedUser: Subscription;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.SubscribeToLoggedUser =
      this.authenticationService.loggedInUser.subscribe((user) => {
        if (user && user.id) {
          this.loadCards(user.role);
        } else this.authenticationService.logOut();
      });
  }

  private async loadCards(userRole) {
    this.isCardsLoading = true;
    this.cards = await this.userService.getSignleConfig(userRole, 'cards');
    setTimeout(() => {
      this.isCardsLoading = false;
    }, 200);
  }
}
