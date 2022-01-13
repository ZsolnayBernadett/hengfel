/*
* Author: Zsolnai Bernadett
* Copyright: 2022, Zsolnai Bernadett
* Group: Szoft II N
* Date: 2022-01-13
* Github: https://github.com/ZsolnayBernadett
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hengfel';

  hengerFelsz !: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.hengerFelsz = this.formBuilder.group({

      sugar: [''],
      hossz:[''],
      felszin:[''],
    });
  }
  
  onClickSzamol(){
    let sugar = Number(this.hengerFelsz.value.sugar);
    let hossz = Number(this.hengerFelsz.value.hossz);
    let felszin = (2*Math.PI*Math.pow(sugar,2))+(2*Math.PI*sugar*hossz);
    this.hengerFelsz.patchValue({felszin: felszin});
    console.log(felszin);
  }
}
