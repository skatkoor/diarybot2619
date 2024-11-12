import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  heroBookOpenSolid,
  heroClipboardDocumentListSolid,
  heroCurrencyDollarSolid,
  heroCog6ToothSolid,
  // Uncomment if you include the AI Assistant feature
  // heroChatBubbleLeftRightSolid,
} from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroBookOpenSolid,
      heroClipboardDocumentListSolid,
      heroCurrencyDollarSolid,
      heroCog6ToothSolid,
      // Uncomment if you include the AI Assistant feature
      // heroChatBubbleLeftRightSolid,
    }),
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
