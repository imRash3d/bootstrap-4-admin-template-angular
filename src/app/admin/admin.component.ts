import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../global/script-loader.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _script:ScriptLoaderService) { }

  ngOnInit() {
    this._script.loadScripts('body', ['assets/js/custom.js']).then(result => {
    });
  }

}

