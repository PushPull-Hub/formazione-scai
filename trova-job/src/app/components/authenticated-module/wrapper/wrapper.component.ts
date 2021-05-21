import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/models/configuration.model';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
  loggedInuser: User;
  configurations: Configuration;
  loadDatafromService: Subscription;
  logToSignOutEvent: Subscription;
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.loadDatafromService = this.loadData();
    this.logToSignOutEvent = this.IfChildComponentRequiredLogOut();
  }

  private IfChildComponentRequiredLogOut() {
    return this.authenticationService.loggingOut.subscribe((value: boolean) => {
      if (value) this.authenticationService.logOut();
    });
  }

  private loadData() {
    return this.authenticationService.loggedInUser.subscribe(
      async (user: User) => {
        try {
          if (user) {
            this.loggedInuser = user;
            this.configurations = await this.userService.getConfigurations(
              user.role
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  }

  ngOnDestroy() {
    this.loadDatafromService.unsubscribe();
    this.logToSignOutEvent.unsubscribe();
  }
}
