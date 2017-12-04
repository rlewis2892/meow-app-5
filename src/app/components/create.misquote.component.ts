import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Status} from "../classes/status";
import {MisquoteService} from "../services/misquote.service";
import {Misquote} from "../classes/misquote";

@Component({
	selector: "create-misquote",
	templateUrl: "./templates/create.misquote.html"
})

export class CreateMisquoteComponent implements OnInit {
	misquoteForm: FormGroup;
	status : Status = null;

	constructor(private formBuilder: FormBuilder, private misquoteService: MisquoteService) {}

	ngOnInit() : void {
		this.misquoteForm = this.formBuilder.group({
			attribution: ["", [Validators.maxLength(64), Validators.required]],
			misquote: ["", [Validators.maxLength(64), Validators.required]],
			submitter: ["", [Validators.maxLength(64), Validators.required]]
		});
	}

	createMisquote(): void {
		let misquote = new Misquote(null, this.misquoteForm.value.attribution, this.misquoteForm.value.misquote, this.misquoteForm.value.submitter);
		this.misquoteService.createMisquote(misquote)
			.subscribe(status => {
				this.status = status;
				if(this.status.status === 200) {
					this.misquoteForm.reset();
				}
			});
	}
}
