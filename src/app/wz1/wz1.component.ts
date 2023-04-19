import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { from } from 'rxjs';
import { HistoryDetails, Job } from './land.data.model';

@Component({
  selector: 'app-wz1',
  templateUrl: './wz1.component.html',
  styleUrls: ['./wz1.component.css'],
})
export class Wz1Component implements OnInit {

  jobCard!: Job;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  isLinear = false;

  selectedObject: any;
  // public percentage : number = 0; 
  percentage?: string = "0";
  basic_submit_btn: boolean = true;

  fruitCtrl = new FormControl('');

  allForm: FormArray = new FormArray([]);
  basicDataGroup: FormGroup = new FormGroup({});
  documentGroup: FormGroup = new FormGroup({});
  verificationGroup: FormGroup = new FormGroup({});
  approvalGroup: FormGroup = new FormGroup({});

  separatorKeysCodes: number[] = [ENTER, COMMA];

  public options: any[] = [
    {
      id: 'PA1',
      category: 'මුල් අයිතිය - දීමනාපත්‍ර',
      checkDoc: [
        {
          contolName: 'requestLetter',
          label: 'Request Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          label: 'License Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'officeLicenLetter',
          label: 'Office License Letter Copy',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'ledger',
          label: 'Ledger',
          value: '',
          type: 'checkBox'
        },
        {
          contolName: 'birthCertificate',
          label: 'Birth Certificate',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'gnReport',
          label: 'G.N Report',
          value: '',
          type: 'checkBox'
        },
        {
          contolName: 'coConformation',
          label: 'C.O Conformation',
          value: '',
          type: 'checkBox',
        },
        { contolName: 'other', label: 'Other', value: '', type: 'checkBox' },
        { contolName: 'description', label: 'Other', value: '', type: 'input' },
        { contolName: 'comment', label: 'Comments', value: '["Document Invalid","OK"]', type: 'chip' },
      ],
      verification: [
        { contolName: 'dsReport', label: 'DS Report', value: '', type: 'checkBox' },
        { contolName: 'coVerification', label: 'C.O Verification', value: '', type: 'checkBox' },
        { contolName: 'idCopy', label: 'ID Copy', value: '', type: 'checkBox' },
        { contolName: 'affidavit', label: 'Affidavit', value: '', type: 'checkBox' },
        { contolName: 'dsReport', label: 'D.S Report', value: '', type: 'checkBox' },
        { contolName: '155page', label: '155 Document', value: '', type: 'checkBox' },
      ],
      aproval: [
        { contolName: 'ds_approvel', label: 'D.S Approval', value: '', type: 'checkBox' }],
      completion: [
        { contolName: 'status', label: 'Status', value: '', type: 'checkBox' },
      ],
    },
    {
      id: 'PA2',
      category: 'මුල් අයිතිය - බලපත්‍ර',
      checkDoc: [
        {
          contolName: 'requestLetter',
          label: 'Request Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          label: 'License Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'officeLicenLetter',
          label: 'Office License Letter Copy',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'ledger',
          label: 'Ledger',
          value: '',
          type: 'checkBox'
        },
        {
          contolName: 'birthCertificate',
          label: 'Birth Certificate',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'gnReport',
          label: 'G.N Report',
          value: '',
          type: 'checkBox'
        },
        {
          contolName: 'coConformation',
          label: 'C.O Conformation',
          value: '',
          type: 'checkBox',
        },
        { contolName: 'other', label: 'Other', value: '', type: 'checkBox' },
        { contolName: 'description', label: 'Other', value: '', type: 'input' },
      ],
      verification: [
        { contolName: 'dsReport', label: 'DS Report', value: '', type: 'checkBox' },
        {
          contolName: 'coVerification',
          label: 'C.O Verification',
          value: '',
          type: 'checkBox',
        },
        { contolName: 'idCopy', label: 'ID Copy', value: '', type: 'checkBox' },
        { contolName: 'affidavit', label: 'Affidavit', value: '', type: 'checkBox' },
        { contolName: 'dsReport', label: 'D.S Report', value: '', type: 'checkBox' },
      ],
      aproval: [
        { contolName: 'ds_approvel', label: 'D.S Approval', value: '', type: 'checkBox' },
      ],
      completion: [
        { contolName: 'status', label: 'Status', value: '', type: 'checkBox' },
      ],
    },
    {
      id: 'PA3',
      category: 'පසු අයිතිය - බලපත්‍ර',
      checkDoc: [
        {
          contolName: 'requestLetter',
          label: 'Request Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          label: 'License Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'officeLicenLetter',
          label: 'Office License Letter Copy',
          value: '',
          type: 'checkBox',
        },
        { contolName: 'ledger', label: 'Ledger', value: '', type: 'checkBox' },
        {
          contolName: 'birthCertificate',
          label: 'Birth Certificate',
          value: '',
          type: 'checkBox',
        },
        { contolName: 'gnReport', label: 'G.N Report', value: '', type: 'checkBox' },
        {
          contolName: 'coConformation',
          label: 'C.O Conformation',
          value: '',
          type: 'checkBox',
        }
      ],
      verification: [
        { contolName: 'dsReport', label: 'DS Report', value: '', type: 'checkBox' },
        {
          contolName: 'coVerification',
          label: 'C.O Verification',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'affidavit', label: 'Affidavit', value: '', type: 'checkBox' },
        { contolName: 'dsReport', label: 'D.S Report', value: '', type: 'checkBox' },
      ],
      aproval: [
        { contolName: 'ds_approvel', label: 'D.S Approval', value: '', type: 'checkBox' },
      ],
      completion: [
        { contolName: 'status', label: 'Status', value: '', type: 'checkBox' },
      ],
    },
    {
      id: 'PA4',
      category: 'පසු අයිතිය - දීමනාපත්‍ර',
      checkDoc: [
        {
          contolName: 'requestLetter',
          label: 'Request Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          label: 'License Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'officeLicenLetter',
          label: 'Office License Letter Copy',
          value: '',
          type: 'checkBox',
        },
        { contolName: 'ledger', label: 'Ledger', value: '', type: 'checkBox' },
        {
          contolName: 'birthCertificate',
          label: 'Birth Certificate',
          value: '',
          type: 'checkBox',
        },
        { contolName: 'gnReport', label: 'G.N Report', value: '', type: 'checkBox' },
        {
          contolName: 'coConformation',
          label: 'C.O Conformation',
          value: '',
          type: 'checkBox',
        },
        { contolName: '154page', label: '155 Document', value: '', type: 'checkBox' },
      ],
      verification: [
        { contolName: 'dsReport', label: 'DS Report', value: '', type: 'checkBox' },
        {
          contolName: 'coVerification',
          label: 'C.O Verification',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'affidavit', label: 'Affidavit', value: '', type: 'checkBox' },
        { contolName: 'dsReport', label: 'D.S Report', value: '', type: 'checkBox' },
      ],
      aproval: [
        { contolName: 'ds_approvel', label: 'D.S Approval', value: '', type: 'checkBox' },
      ],
      completion: [
        { contolName: 'status', label: 'Status', value: '', type: 'checkBox' },
      ],
    },
    {
      id: 'PA5',
      category: 'නොතාරිස් පැවරුම්',
      checkDoc: [
        {
          contolName: 'requestLetter',
          label: 'Request Letter',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'ledger', label: 'Ledger', value: '', type: 'checkBox' },
        { contolName: 'map', label: 'Map', value: '', type: 'checkBox' },
        {
          contolName: 'birthCertificate', label: 'Birth Certificate', value: '', type: 'checkBox'
        },
        { contolName: 'gnReport', label: 'G.N Report', value: '', type: 'checkBox' },
        {
          contolName: 'coConformation',
          label: 'C.O Conformation',
          value: '',
          type: 'checkBox',
        }
      ],
      verification: [
        { contolName: 'dsReport', label: 'DS Report', value: '', type: 'checkBox' },
        {
          contolName: 'coVerification',
          label: 'C.O Verification',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'affidavit', label: 'Affidavit', value: '', type: 'checkBox' },
        { contolName: 'dsReport', label: 'D.S Report', value: '', type: 'checkBox' },
      ],
      aproval: [
        { contolName: 'ds_approvel', label: 'D.S Approval', value: '', type: 'checkBox' },
      ],
      completion: [
        { contolName: 'status', label: 'Status', value: '', type: 'checkBox' },
      ],
    },
    {
      id: 'PA6',
      category: 'ජීවිත භුක්තියභුක්තිය',
      checkDoc: [
        {
          contolName: 'requestLetter',
          label: 'Request Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          label: 'License Letter',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'ledger', label: 'Ledger', value: '', type: 'checkBox' },


        { contolName: 'gnReport', label: 'G.N Report', value: '', type: 'checkBox' },
        {
          contolName: 'birthCertificate', label: 'Birth Certificate', value: '', type: 'checkBox'
        },
        {
          contolName: 'coConformation',
          label: 'C.O Conformation',
          value: '',
          type: 'checkBox',
        }
      ],
      verification: [
        { contolName: 'dsReport', label: 'DS Report', value: '', type: 'checkBox' },
        {
          contolName: 'coVerification',
          label: 'C.O Verification',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'affidavit', label: 'Affidavit', value: '', type: 'checkBox' },
        { contolName: 'dsReport', label: 'D.S Report', value: '', type: 'checkBox' },
      ],
      aproval: [
        { contolName: 'ds_approvel', label: 'D.S Approval', value: '', type: 'checkBox' },
      ],
      completion: [
        { contolName: 'status', label: 'Status', value: '', type: 'checkBox' },
      ],
    },
    {
      id: 'PA7',
      category: 'බැංකු ඇපකර',
      checkDoc: [
        {
          contolName: 'requestLetter',
          label: 'Request Letter',
          value: '',
          type: 'checkBox',
        },
        {
          contolName: 'licenseLetter',
          label: 'License Letter',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'ledger', label: 'Ledger', value: '', type: 'checkBox' },


        { contolName: 'gnReport', label: 'G.N Report', value: '', type: 'checkBox' },
        {
          contolName: 'birthCertificate', label: 'Birth Certificate', value: '', type: 'checkBox'
        },
        {
          contolName: 'coConformation',
          label: 'C.O Conformation',
          value: '',
          type: 'checkBox',
        }
      ],
      verification: [
        { contolName: 'dsReport', label: 'DS Report', value: '', type: 'checkBox' },
        {
          contolName: 'coVerification',
          label: 'C.O Verification',
          value: '',
          type: 'checkBox',
        },

        { contolName: 'affidavit', label: 'Affidavit', value: '', type: 'checkBox' },
        { contolName: 'dsReport', label: 'D.S Report', value: '', type: 'checkBox' },
      ],
      aproval: [
        { contolName: 'ds_approvel', label: 'D.S Approval', value: '', type: 'checkBox' },
      ],
      completion: [
        { contolName: 'status', label: 'Status', value: '', type: 'checkBox' },
      ],
    },
  ];

  histories: HistoryDetails[] = [{ title: 'Created By', createdBy: 'ABC', date: new Date(), id: 1 },
  { title: 'Created By', createdBy: 'ABC', date: new Date(), id: 1 },
  { title: 'Created By', createdBy: 'ABC', date: new Date(), id: 1 },
  { title: 'Created By', createdBy: 'ABC', date: new Date(), id: 1 }];

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    // this.documentGroup = this._formBuilder.group({});

    this.basicDataGroup = _formBuilder.group({
      category: ['', Validators.required],
      nic: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      division: ['', Validators.required],
      tel: ['', Validators.required],
      permitNumber: [''],
      landNumber: [''],
      description: [''],

    })
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
    // this.basicDataGroup.
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

    this.allForm = this._formBuilder.array([
      this.basicDataGroup,
      this.documentGroup,
      this.verificationGroup,
      this.approvalGroup
    ])
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
    const approvelGroupControls = this.approvalGroup.controls;
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
    for (const name in approvelGroupControls) {
      if (approvelGroupControls[name].status === 'INVALID') {
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

  save() {

    this.jobCard.documents = this.documentGroup.value;
    this.jobCard.reports = this.verificationGroup.value;
    this.jobCard.approvel = this.approvalGroup.value;
    this.jobCard = this.basicDataGroup.value
    this.onStepChange('');

  }

  saveBasicDetails() {
    if (this.basicDataGroup.valid) {

      this.basicDataGroup.disable()
      this.basic_submit_btn = false
      window.scrollTo({ top: 0 })
      this.jobCard = this.basicDataGroup.value;
      this.jobCard.completePresentage = this.percentage;
    }

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


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    // this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }


}

function ViewChild(arg0: string, arg1: { read: any }) {
  throw new Error('Function not implemented.');
}
