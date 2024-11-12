import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'diary', loadChildren: () => import('./features/diary/diary.module').then(m => m.DiaryModule) },
  { path: 'notes', loadChildren: () => import('./features/notes/notes.module').then(m => m.NotesModule) },
  { path: 'todo', loadChildren: () => import('./features/todo/todo.module').then(m => m.TodoModule) },
  { path: 'finance', loadChildren: () => import('./features/finance/finance.module').then(m => m.FinanceModule) },
  // Commented out AI Assistant route for now
  // { path: 'ai-assistant', loadChildren: () => import('./features/ai-assistant/ai-assistant.module').then(m => m.AiAssistantModule) },
  { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
  { path: '', redirectTo: '/diary', pathMatch: 'full' },
  { path: '**', redirectTo: '/diary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
