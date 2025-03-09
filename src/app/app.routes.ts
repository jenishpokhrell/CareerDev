import { Routes } from '@angular/router';
import { BrowseJobsComponent } from './components/browse-jobs/browse-jobs.component';
import { HomeComponent } from './components/home/home.component';
import { PostJobsComponent } from './components/post-jobs/post-jobs.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { EmployerPageComponent } from './components/employer-page/employer-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'browse-jobs',
        component: BrowseJobsComponent
    },
    {
        path: 'post-jobs',
        component: PostJobsComponent
    },
    {
        path: 'sign-up',
        component: SignUpPageComponent
    },
    {
        path: 'employer',
        component: EmployerPageComponent
    },
];
