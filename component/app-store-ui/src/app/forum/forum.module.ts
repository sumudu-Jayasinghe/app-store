import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForumMainComponent } from "./components/forum-main/forum-main.component";
import { SharedModule } from "../shared/shared.module";
import { ForumRoutes } from "./forum.routes";
import { TopicResultComponent } from "./components/topic-result/topic-result.component";
import { ForumService } from "./forum.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { forumReducer } from "./forum.reducer";
import { ForumEffects } from "./forum.effects";
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { ViewTopicComponent } from './components/view-topic/view-topic.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutes,
    StoreModule.forFeature("forum", forumReducer),
    EffectsModule.forFeature([ForumEffects])
  ],
  declarations: [ForumMainComponent, TopicResultComponent, CreateTopicComponent, ViewTopicComponent],
  providers: [ForumService]
})
export class ForumModule {}
