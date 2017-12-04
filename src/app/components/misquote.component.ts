import {Component, OnInit} from "@angular/core";
import {MisquoteService} from "../services/misquote.service";
import {ActivatedRoute} from "@angular/router";
import {Misquote} from "../classes/misquote";

@Component({
	templateUrl: "./templates/misquote.html"
})

export class MisquoteComponent implements OnInit {

	misquote: Misquote = new Misquote(null, null, null, null);

	constructor(private misquoteService: MisquoteService, private route: ActivatedRoute) {}

	getMisquoteByMisquoteId() : void {
		let misquoteId : string = this.route.snapshot.params["misquoteId"];
		this.misquoteService.getMisquote(misquoteId)
			.subscribe(misquote => this.misquote = misquote);
	}

	ngOnInit() : void {
		this.getMisquoteByMisquoteId();
	}
}
