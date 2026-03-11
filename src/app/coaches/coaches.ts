import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coaches.html'
})
export class CoachesComponent {}
