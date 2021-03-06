import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {ManagementManagerModule} from "./management-manager/management-manager.module";
import {CollaboratorModule} from "./collaborator/collaborator.module";
import {AddCollaboratorModule} from "./collaborator/add-collaborator/add-collaborator.module";
import {ManagementEtudiantModule} from "./management-etudiant/management-etudiant.module";
import {OffersRoutingModule} from "./manager/offers/offers-routing.module";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'add-candidat', loadChildren: './managementcandidat/add-candidat/add-candidat.module#AddcandidatModule' },
            { path: 'display-candidat', loadChildren: './managementcandidat/display-candidat/display-candidat.module#DisplaycandidatModule'},
            { path: 'detailscandidat', loadChildren: './managementcandidat/details-candidat/details-candidat.module#DetailscandidatModule'},
            { path: 'profileEtudiant', loadChildren: './profile-etudiant/profile.module#ProfileUrhModule'},
            { path: 'displayUrh', loadChildren: './managementemployees/display-rhs/display-rhs.module#DisplayUrhModule'},
            { path: 'addUrh', loadChildren: './managementemployees/display-rhs/add-rh/add-rh.module#AddUrhModule'},
            { path: 'managementManager', loadChildren: './management-manager/management-manager.module#ManagementManagerModule'},
            { path: 'managementEtudiant', loadChildren: './management-etudiant/management-etudiant.module#ManagementEtudiantModule'},
            { path: 'display-collaborateur', loadChildren: './collaborator/collaborator.module#CollaboratorModule'},
            { path: 'add-collaborateur', loadChildren: './collaborator/add-collaborator/add-collaborator.module#AddCollaboratorModule'},
            { path: 'management-offers', loadChildren: './manager/offers/offers.module#OffersModule'},

            { path: 'messagerie-etudiant/:mot', loadChildren: './managementcandidat/messagerie-manager/messagerie-manager.module#MessagerieManagerModule'},
            { path: 'profileManager', loadChildren: './manager/profile/profile.module#ProfileModule'}
        ],

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
