import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tache',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.scss'
})
export class TacheComponent {
  tasks =['Faire les courses', 'Faire lessive', 'Nettoyer maison'];

  newTask = 'Ajouter une tâches';

  addTask(){
    this.tasks.push(this.newTask);
  }
}
