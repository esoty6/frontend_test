import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  constructor(protected userService: UserService) {}

  protected dropdownIsOpen = false;
  protected selectedItemId = -1;

  showUserData = () => this.userService.showUserName();
  resetSettings = () => this.userService.reset();

  @Input()
  protected dropdownContent = [
    { id: 1, label: 'Zresetuj ustawienia', click: this.resetSettings },
    {
      id: 2,
      label: 'Pokaż dane osobowe',
      click: this.showUserData,
    },
  ];

  toggleDropdown = () => {
    this.dropdownIsOpen = !this.dropdownIsOpen;
  };

  optionSelect = (itemId: number, click: () => void) => {
    this.selectedItemId = itemId;
    click();
    this.dropdownIsOpen = false;
  };
}
