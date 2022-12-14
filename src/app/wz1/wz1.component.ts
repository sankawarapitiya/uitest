import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, Input, OnInit } from '@angular/core';
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
  // public percentage : number = 0; 
  @Input() percentage?: string = "0" ;

  documentGroup: FormGroup = new FormGroup({});
  verificationGroup: FormGroup = new FormGroup({});
  approvalGroup:  FormGroup = new FormGroup({});

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
      aproval: [
        { contolName: 'ds_approvel', value: 'D.S Approval', type: 'checkBox' },
      ],

      completion: [
        { contolName: 'dsReport', value: 'D.S Report', type: 'checkBox' },
      ],
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
      aproval: [
        { contolName: 'ds_approvel', value: 'D.S Approval', type: 'checkBox' },
      ],
      completion: ['status'],
    },
  ];

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    // this.documentGroup = this._formBuilder.group({});
  }

  onJobChange(event: any) {
    let selectedCat = event;
    this.selectedObject = this.options.find(({ id }) => id === selectedCat);
    this.genarateForm(this.selectedObject);
    this.percentage = "0";
  }

  genarateForm(selectedObject: any) {
    this.documentGroup.reset();
    this.verificationGroup.reset();
    this.approvalGroup.reset();
    selectedObject?.checkDoc.forEach((element: any) => {
      this.documentGroup?.addControl(
        element?.contolName,
        new FormControl('', Validators.required)
      );
    });

    selectedObject?.aproval.forEach((element: any) => {
      this.approvalGroup?.addControl(
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

  public onStepChange(event: any): void {
    this.percentage = this.check().toString();
  }
  get formattedDashArray() {
    return this.percentage + ', 100';
  }

  check(): number {
    const documentGroupcontrols = this.documentGroup.controls;
    const verificationGroupcontrols = this.verificationGroup.controls;
    const invalidArr = [];
    const validArr = [];
    for (const name in documentGroupcontrols) {
 
      if (documentGroupcontrols[name].status === 'INVALID') {
        invalidArr.push(name);
      } else {
        validArr.push(name);
      }
    }
    for (const name in verificationGroupcontrols) {
      if (verificationGroupcontrols[name].status === 'INVALID') {
        invalidArr.push(name);
      } else {
        validArr.push(name);
      }
    }
    // console.log(`valid count : ${validArr.length}`)
    // console.log(`invalid count : ${invalidArr.length}`)
    const presentage = Math.round(validArr.length / (validArr.length + invalidArr.length) * 100)
    console.log(presentage)
    return presentage
  }

  ngOnInit(): void { }

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

  onSubmit() { }
}

function ViewChild(arg0: string, arg1: { read: any }) {
  throw new Error('Function not implemented.');
}
