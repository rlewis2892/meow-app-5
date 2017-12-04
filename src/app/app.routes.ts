// import @angular dependencies
import {RouterModule, Routes} from "@angular/router";

// import components
import {HomeComponent} from "./components/home.component";
import {MisquoteListComponent} from "./components/misquote.list.component";

// import services
import {MisquoteService} from "./services/misquote.service";

// import interceptors
import {APP_BASE_HREF} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DeepDiveInterceptor} from "./services/deep.dive.interceptor";

// array of components to be passed off to the module
export const allAppComponents = [HomeComponent, MisquoteListComponent];

// setup routes
export const routes: Routes = [
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