import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Misquote} from "../classes/misquote";
import {Status} from "../classes/status";

@Injectable()
export class MisquoteService {

	constructor(protected http: HttpClient) {}

	private misquoteUrl = "https://bootcamp-coders.cnm.edu/~dmcdonald21/misquote-of-the-day/public_html/api/misquote/";

	deleteMisquote(misquoteId: string) : Observable<Status> {
		return(this.http.delete<Status>(this.misquoteUrl + misquoteId));
	}

	getAllMisquotes() : Observable<Misquote[]> {
		return(this.http.get<Misquote[]>(this.misquoteUrl));
	}

	getMisquote(misquoteId: string) : Observable<Misquote> {
		return(this.http.get<Misquote>(this.misquoteUrl + misquoteId));
	}

	createMisquote(misquote: Misquote) : Observable<Status> {
		return(this.http.post<Status>(this.misquoteUrl, misquote));
	}

	editMisquote(misquote: Misquote) : Observable<Status> {
		return(this.http.put<Status>(this.misquoteUrl + misquote.misquoteId, misquote));
	}
}