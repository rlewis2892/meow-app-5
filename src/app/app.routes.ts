// import @angular dependencies
import {RouterModule, Routes} from "@angular/router";

// import components
import {CreateMisquoteComponent} from "./components/create.misquote.component";
import {HomeComponent} from "./components/home.component";
import {MisquoteComponent} from "./components/misquote.component";
import {MisquoteListComponent} from "./components/misquote.list.component";

// import services
import {MisquoteService} from "./services/misquote.service";

// import interceptors
import {APP_BASE_HREF} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DeepDiveInterceptor} from "./services/deep.dive.interceptor";

// array of components to be passed off to the module
export const allAppComponents = [CreateMisquoteComponent, HomeComponent, MisquoteComponent, MisquoteListComponent];

// setup routes
export const routes: Routes = [
	{path: "misquote/:misquoteId", component: MisquoteComponent},
	{path: "misquotes", component: MisquoteListComponent},
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

// array of services
const services: any[] = [MisquoteService];

// array of providers
const providers : any[] = [
	{provide: APP_BASE_HREF, useValue: window["_base_href"]},
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true},
];

export const appRoutingProviders: any[] = [providers, services];

export const routing = RouterModule.forRoot(routes);