import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-wz1',
  templateUrl: './wz1.component.html',
  styleUrls: ['./wz1.component.css'],
})
export class Wz1Component implements OnInit {
  isLinear = false;
  selected = '';
  selectedObject: any;

  counterPresentage : { iv: number; v: number; p: number; } | undefined ;

  documentGroup: FormGroup = new FormGroup({});
  verificationGroup: FormGroup = new FormGroup({});

  public options: any[] = [
    {
      id: 'PA1',
      category: 'මුල් අයිතිය',
      checkDoc: [
        {
          contolName: 'requestLetter',
          value: 'Request Letter',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          value: 'License Letter',
          type: 'checkBox',
        },
        {
          contolName: 'officeLicenLetter',
          value: 'Office License Letter Copy',
          type: 'checkBox',
        },
        { contolName: 'ledger', value: 'Ledger', type: 'checkBox' },
        {
          contolName: 'birthCertificate',
          value: 'Birth Certificate',
          type: 'checkBox',
        },
        { contolName: 'gnReport', value: 'G.N Report', type: 'checkBox' },
        {
          contolName: 'coConformation',
          value: 'C.O Conformation',
          type: 'checkBox',
        },
        { contolName: 'other', value: 'Other', type: 'checkBox' },
        { contolName: 'description', value: 'Other', type: 'input' },
      ],
      verification: [
        { contolName: 'dsReport', value: 'DS Report', type: 'checkBox' },
        {
          contolName: 'coVerification',
          value: 'C.O Verification',
          type: 'checkBox',
        },
        { contolName: 'idCopy', value: 'ID Copy', type: 'checkBox' },
        { contolName: 'affidavit', value: 'Affidavit', type: 'checkBox' },
        { contolName: 'dsReport', value: 'D.S Report', type: 'checkBox' },
      ],
      completion: ['status'],
    },
    {
      id: 'PA2',
      category: 'පසු අයිතිය',
      checkDoc: [
        {
          contolName: 'requestLetter',
          value: 'Request Letter',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          value: 'License Letter',
          type: 'checkBox',
        },
        {
          contolName: 'officeLicenLetter',
          value: 'Office License Letter Copy',
          type: 'checkBox',
        },
        { contolName: 'ledger', value: 'Ledger', type: 'checkBox' },
        {
          contolName: 'birthCertificate',
          value: 'Birth Certificate',
          type: 'checkBox',
        },
        { contolName: 'gnReport', value: 'G.N Report', type: 'checkBox' },
        {
          contolName: 'coConformation',
          value: 'C.O Conformation',
          type: 'checkBox',
        },
        { contolName: '154page', value: '155 Document', type: 'checkBox' },
      ],
      verification: [
        { contolName: 'dsReport', value: 'DS Report', type: 'checkBox' },
        {
          contolName: 'coVerification',
          value: 'C.O Verification',
          type: 'checkBox',
        },

        { contolName: 'affidavit', value: 'Affidavit', type: 'checkBox' },
        { contolName: 'dsReport', value: 'D.S Report', type: 'checkBox' },
      ],
      completion: ['status'],
    },
  ];

  constructor(
    private _formBuilder: FormBuilder, 
  ) {
    this.documentGroup = this._formBuilder.group({});
  }

  onJobChange(event: any) {
    let selectedCat = event;
    this.selectedObject = this.options.find(({ id }) => id === selectedCat);
    this.genarateForm(this.selectedObject);
  }

  genarateForm(selectedObject: any) {
    this.documentGroup.reset();
    this.verificationGroup.reset();


    console.log(selectedObject);
    selectedObject?.checkDoc.forEach((element: any) => {
      console.log(element.contolName);
      this.documentGroup?.addControl(
        element?.contolName,
        new FormControl('', Validators.required)
      );
    });

    selectedObject?.verification.forEach((element: any) => {
      this.verificationGroup?.addControl(
        element?.contolName,
        new FormControl('', Validators.required)
      );
    });
  } 


  check(){
    const documentGroupcontrols = this.documentGroup.controls ;     
    const verificationGroupcontrols = this.verificationGroup.controls ;     
    const invalidArr = [];
    const validArr = [];


    for (const name in documentGroupcontrols) {
      if (documentGroupcontrols[name].status === 'INVALID') {
         invalidArr.push(name);
      }else{
        validArr.push(name);
      }
    }

    for (const name in verificationGroupcontrols) {
      if (verificationGroupcontrols[name].status === 'INVALID') {
         invalidArr.push(name);
      }else{
        validArr.push(name);
      }
    }
    console.log(`valid count : ${validArr.length}`)
    console.log(`invalid count : ${invalidArr.length}`)
    this.counterPresentage = {iv :validArr.length, v : invalidArr.length, p:(validArr.length/(validArr.length+invalidArr.length)*100)  }
  
  }

  ngOnInit(): void {}

  // checkDoc = this._formBuilder.group({
  //   requestLetter: [false, Validators.required],
  //   licenseLetter: [false, Validators.required],
  //   officeLicenLetter: [false, Validators.required],
  //   ledger: [false, Validators.required],
  //   birthCertificate: [false, Validators.required],
  //   officeStatement: [false, Validators.required],
  //   gnReport: [false, Validators.required],
  //   coConformation: [false, Validators.required],
  //   other: [false, Validators.required],
  // });

  // firstFormGroup = this._formBuilder.group({
  //   checkDoc: this.checkDoc,
  // });

  // verification = this._formBuilder.group({
  //   dsReport: ['', Validators.required],
  //   coVerification: ['', Validators.required],
  //   idCopy: ['', Validators.required],
  //   affidavit: ['', Validators.required],
  // });

  // secondFormGroup = this._formBuilder.group({
  //   verification: this.verification,
  // });

  onSubmit() {}
}

function ViewChild(arg0: string, arg1: { read: any }) {
  throw new Error('Function not implemented.');
}
