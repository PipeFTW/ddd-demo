import {Component} from '@angular/core';
import {BehaviorSubject, take, tap} from 'rxjs';
import {Action, BaseTableComponent, DropdownAction, TableStorageService} from '@ddd-demo/ui/shared';
import {columnDefinitionConstants} from './column-definitions';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {CreateUser, IUserDataService, User} from '@ddd-demo/ui/user';

@Component({
  selector: 'ddd-demo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseTableComponent<User> {

  override TABLE_KEY = 'ddd-demo-user-table';

  usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  actions: Action[] = [];

  constructor(tableStorageService: TableStorageService, private readonly userDataService: IUserDataService,
              private readonly notifyService: NzNotificationService) {
    super(tableStorageService)

    this.actions = [
      new Action('Refresh', '', this.refresh.bind(this)),
      new Action('Create Random User', '', this.createRandomUser.bind(this)),
    ];

    const dropdownActions: DropdownAction[] = [
      new DropdownAction('Delete', 'delete', 'delete', this.deleteUser.bind(this))
    ];

    this.setDefaultColumnDefinitions(columnDefinitionConstants, dropdownActions);
    this.fetchUsers();
  }

  refresh() {
    this.notifyService.info('Refresh', 'Refreshing users', {nzPlacement: 'bottomRight'});
    this.fetchUsers();
  }

  createRandomUser() {
    // generate random name
    const randomName = Math.random().toString(36).substring(7);
    // generate random surname
    const randomSurname = Math.random().toString(36).substring(7);
    // generate random email
    const randomEmail = Math.random().toString(36).substring(7) + '@' + Math.random().toString(36).substring(7) + '.com';

    const user: CreateUser = new CreateUser(randomName, randomSurname, randomEmail);
    this.userDataService.createUser(user)
      .pipe(
        take(1),
        tap((user: User) => {
          this.notifyService.success('User created', `User ${user.name} ${user.surname} created`, {nzPlacement: 'bottomRight'});
          this.usersSubject.next([...this.usersSubject.value, user]);
        })
      )
      .subscribe();
  }

  deleteUser(user: User) {
    this.userDataService.deleteUser(user.id).pipe(
      take(1),
      tap(() => {
        this.notifyService.info('User deleted', `User ${user.name} ${user.surname} deleted`, {nzPlacement: 'bottomRight'});
        this.usersSubject.next(this.usersSubject.value.filter((u: User) => u.id !== user.id));
      })
    ).subscribe();
  }

  private fetchUsers() {
    this.userDataService.fetchAllUsers().pipe(
      take(1),
      tap((users: User[]) => {
        console.log(`users: ${users}`);
        this.usersSubject.next(users)
      })
    ).subscribe();
  }
}
