import {Component, OnInit} from "@angular/core";
import {MisquoteService} from "../services/misquote.service";
import {Misquote} from "../classes/misquote";

@Component({
	templateUrl: "./templates/misquote.list.html"
})

export class MisquoteListComponent implements OnInit {

	misquotes: Misquote[] = [];

	constructor(private misquoteService: MisquoteService) {}

	getAllMisquotes(): void {
		this.misquoteService.getAllMisquotes()
			.subscribe(misquotes => this.misquotes = misquotes);
	}

	ngOnInit(): void {
		this.getAllMisquotes();
	}
}
