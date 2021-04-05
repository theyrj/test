import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@app/material.module';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.less']
})
export class MyprofileComponent implements OnInit {
  user: User;
  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
}

  ngOnInit(): void {
  }

}
