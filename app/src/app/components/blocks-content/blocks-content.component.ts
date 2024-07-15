import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-blocks-content',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './blocks-content.component.html',
  styleUrl: './blocks-content.component.scss',
})
export class BlocksContentComponent {
  private textArrays = [
    {
      id: 1,
      value:
        'Pellentesque ornare dictum nunc, quis pretium magna cursus ut. Sed.',
    },
    {
      id: 2,
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat semper rhoncus. Mauris sed bibendum.',
    },
    {
      id: 3,
      value: 'Aenean quam nisl, interdum eget egestas et, iaculis ac neque.',
    },
    {
      id: 4,
      value:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames. ',
    },
    {
      id: 5,
      value:
        'Integer ultricies ex in felis viverra malesuada. Vestibulum eget pulvinar.',
    },
    {
      id: 6,
      value:
        'Quisque tincidunt leo scelerisque, fermentum sapien ac, tempor neque. Nullam.',
    },
    {
      id: 7,
      value:
        'Maecenas dui lacus, consequat vel sagittis eu, aliquam ac mauris.',
    },
    {
      id: 8,
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet consectetur erat. Aliquam at scelerisque nibh. Nulla feugiat enim egestas.',
    },
  ];
  protected displayText: { id: number; value: string }[] = [];

  form: FormGroup = new FormGroup({
    option: new FormControl(-1),
  });

  constructor(private userService: UserService) {
    this.userService.reset.subscribe(() => {
      this.form.reset();
      this.displayText = [];
    });
  }

  replaceText = () => {
    if (this.option === 1 || this.option === 2) {
      this.displayText = [this.textArrays[this.option]];
      return;
    }
    this.displayText = [
      this.textArrays[Math.floor(Math.random() * this.textArrays.length)],
    ];
  };

  appendText = () => {
    if (this.option < 0 || !this.option) {
      return;
    }
    console.log(this.option);

    let text;

    if (this.option === 1 || this.option === 2) {
      text = this.textArrays[this.option];
    } else {
      text =
        this.textArrays[Math.floor(Math.random() * this.textArrays.length)];
    }

    if (this.displayText.find(({ id }) => id === text.id)) {
      return;
    }
    this.displayText.push(text);
  };

  getText = () => this.displayText.map(({ value }) => value).join(' ');

  get option() {
    return this.form.get('option')?.value;
  }
}
