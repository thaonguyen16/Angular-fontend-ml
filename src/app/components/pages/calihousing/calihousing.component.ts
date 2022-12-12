import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaliHousingService } from 'src/app/services/calihousing.service';
import { CaliHousing, PredictData } from 'src/app/shared/models/CaliHousing';

export interface ModelData {
  Number: number,
  Longtitude: string,
  Latitude: string,
  Housing_age: string,
  TotalRoom: string,
  TotalBedroom: string,
  Population: string,
  Household: string,
  MedianIncome: string,
  OceanPromxity: string
}

export interface ModelLable {
  Number: number,
  Predict: string,
  Reality: string
}

export interface Dataset {
  Dataset: string[]
}

@Component({
  selector: 'app-calihousing',
  templateUrl: './calihousing.component.html',
  styleUrls: ['./calihousing.component.css']
})
export class CalihousingComponent implements OnInit {

  TypePredict = 1;
  showData = true;
  showReviewPredict = false;

  data!: CaliHousing;
  dataModel: ModelData[] = [];
  dataPredict: ModelLable[] = [];

  predictForm!: FormGroup;

  constructor(private cali: CaliHousingService , private formBuilder: FormBuilder)
  {
    this.getData1();
  }

  show(num: number) {
    this.TypePredict = num;
    this.showData = true;
    this.showDataSets = false;
    this.showReviewPredict = false;

    if(num === 1)
    {
      this.getData1();
    }
    else if(num === 2)
    {
      this.getData2();
    }
    else if(num === 3)
    {
      this.getData3();
    }
    else if(num === 4)
    {
      this.getData4();
    }
    else if(num === 5)
    {
      this.getData5();
    }

  }

  getData1()
  {
    this.dataModel = [];
    this.dataPredict = [];

    this.cali.getDataSample().subscribe(e => {
      this.data = e;
      console.log(this.data);

      let i = 0;
      for(i ; i<5 ; i++)
      {
        let newData1 = {
          Number: Number(e.predict_index[i]),
          Longtitude: e.predict_list[i][0],
          Latitude: e.predict_list[i][1],
          Housing_age: e.predict_list[i][2],
          TotalRoom: e.predict_list[i][3],
          TotalBedroom: e.predict_list[i][4],
          Population: e.predict_list[i][5],
          Household: e.predict_list[i][6],
          MedianIncome: e.predict_list[i][7],
          OceanPromxity: e.predict_list[i][8]
        }
        this.dataModel.push(newData1);


        let newData2 = {
          Number: Number(e.predict_index[i]),
          Predict: (Math.round(Number(e.Predictions[i]) * 100) / 100).toFixed(2),
          Reality: (Math.round(Number(e.predict_labels[i]) * 100) / 100).toFixed(2),
        }

        this.dataPredict.push(newData2);
      }
    })
  }

  getData2() {

    this.dataModel = [];
    this.dataPredict = [];

    this.cali.getDataSample2().subscribe(e => {
      this.data = e;
      console.log(this.data);

      let i = 0;
      for(i ; i<5 ; i++)
      {
        let newData1 = {
          Number: Number(e.predict_index[i]),
          Longtitude: e.predict_list[i][0],
          Latitude: e.predict_list[i][1],
          Housing_age: e.predict_list[i][2],
          TotalRoom: e.predict_list[i][3],
          TotalBedroom: e.predict_list[i][4],
          Population: e.predict_list[i][5],
          Household: e.predict_list[i][6],
          MedianIncome: e.predict_list[i][7],
          OceanPromxity: e.predict_list[i][8]
        }
        this.dataModel.push(newData1);


        let newData2 = {
          Number: Number(e.predict_index[i]),
          Predict: (Math.round(Number(e.Predictions[i]) * 100) / 100).toFixed(2),
          Reality: (Math.round(Number(e.predict_labels[i]) * 100) / 100).toFixed(2),
        }

        this.dataPredict.push(newData2);
      }
    })
  }

  getData3()
  {
    this.dataModel = [];
    this.dataPredict = [];

    this.cali.getDataSample3().subscribe(e => {
      this.data = e;
      console.log(this.data);

      let i = 0;
      for(i ; i<5 ; i++)
      {
        let newData1 = {
          Number: Number(e.predict_index[i]),
          Longtitude: e.predict_list[i][0],
          Latitude: e.predict_list[i][1],
          Housing_age: e.predict_list[i][2],
          TotalRoom: e.predict_list[i][3],
          TotalBedroom: e.predict_list[i][4],
          Population: e.predict_list[i][5],
          Household: e.predict_list[i][6],
          MedianIncome: e.predict_list[i][7],
          OceanPromxity: e.predict_list[i][8]
        }
        this.dataModel.push(newData1);


        let newData2 = {
          Number: Number(e.predict_index[i]),
          Predict: (Math.round(Number(e.Predictions[i]) * 100) / 100).toFixed(2),
          Reality: (Math.round(Number(e.predict_labels[i]) * 100) / 100).toFixed(2),
        }

        this.dataPredict.push(newData2);
      }
    })
  }
  getData4()
  {
    this.dataModel = [];
    this.dataPredict = [];

    this.cali.getDataSample4().subscribe(e => {
      this.data = e;
      console.log(this.data);

      let i = 0;
      for(i ; i<5 ; i++)
      {
        let newData1 = {
          Number: Number(e.predict_index[i]),
          Longtitude: e.predict_list[i][0],
          Latitude: e.predict_list[i][1],
          Housing_age: e.predict_list[i][2],
          TotalRoom: e.predict_list[i][3],
          TotalBedroom: e.predict_list[i][4],
          Population: e.predict_list[i][5],
          Household: e.predict_list[i][6],
          MedianIncome: e.predict_list[i][7],
          OceanPromxity: e.predict_list[i][8]
        }
        this.dataModel.push(newData1);


        let newData2 = {
          Number: Number(e.predict_index[i]),
          Predict: (Math.round(Number(e.Predictions[i]) * 100) / 100).toFixed(2),
          Reality: (Math.round(Number(e.predict_labels[i]) * 100) / 100).toFixed(2),
        }

        this.dataPredict.push(newData2);
      }
    })
  }
  getData5()
  {
    this.dataModel = [];
    this.dataPredict = [];

    this.cali.getDataSample5().subscribe(e => {
      this.data = e;
      console.log(this.data);

      let i = 0;
      for(i ; i<5 ; i++)
      {
        let newData1 = {
          Number: Number(e.predict_index[i]),
          Longtitude: e.predict_list[i][0],
          Latitude: e.predict_list[i][1],
          Housing_age: e.predict_list[i][2],
          TotalRoom: e.predict_list[i][3],
          TotalBedroom: e.predict_list[i][4],
          Population: e.predict_list[i][5],
          Household: e.predict_list[i][6],
          MedianIncome: e.predict_list[i][7],
          OceanPromxity: e.predict_list[i][8]
        }
        this.dataModel.push(newData1);


        let newData2 = {
          Number: Number(e.predict_index[i]),
          Predict: (Math.round(Number(e.Predictions[i]) * 100) / 100).toFixed(2),
          Reality: (Math.round(Number(e.predict_labels[i]) * 100) / 100).toFixed(2),
        }

        this.dataPredict.push(newData2);
      }
    })
  }

  showReview() {
    this.showReviewPredict = true;
    this.showData = false;
    this.showDataSets = false;
  }

  showDataSets = false;

  dataset!: Dataset;

  numberDataset!: number;

  getDataset(){
    this.cali.getDataset().subscribe (e => {
      this.dataset = e;
      this.numberDataset = e.Dataset.length
    })
  }

  showDataSets_fun() {
    this.showData = false;
    this.showReviewPredict = false;
    this.showDataSets = true;
  }


  roundNumberto2(number: string): string{
    return (Math.round(Number(number) * 100) / 100).toFixed(2);
  }

  ngOnInit(): void {

    this.predictForm = this.formBuilder.group({
      longitude: [-122.23, [Validators.required]],
      latitude: [37.88, [Validators.required]],
      housing_median_age: [41, [Validators.required]],
      total_rooms: [880, [Validators.required]],
      total_bedrooms: [129, [Validators.required]],
      population: [322, [Validators.required]],
      households: [126, [Validators.required]],
      median_income: [8.3252, [Validators.required]],
      ocean_proximity: ['NEAR BAY', [Validators.required]],
    });

    this.getDataset();
  }


  viewSample = true;
  viewPredict = false;

  showViewSample()
  {
    this.viewSample = true;
    this.viewPredict = false;
  }
  showViewPrdict()
  {
    this.viewSample = false;
    this.viewPredict = true;
  }

  Result!: string;
  submit() {
    if (this.predictForm.invalid) {
      return;
    }

    const fv = this.predictForm.value;
    const data: PredictData = {
      longitude : fv.longitude,
      latitude : fv.latitude,
      housing_median_age : fv.housing_median_age,
      total_rooms : fv.total_rooms,
      total_bedrooms : fv.total_bedrooms,
      population : fv.population,
      households : fv.households,
      median_income : fv.median_income,
      ocean_proximity : fv.ocean_proximity,
    };

    if(this.TypePredict === 1) {
      this.cali.getPredict(data).subscribe ( e => {
        this.Result = e;
      })
    }
    else if(this.TypePredict === 2) {
      this.cali.getPredict2(data).subscribe ( e => {
        this.Result = e;
      })
    }
    else if(this.TypePredict === 3) {
      this.cali.getPredict3(data).subscribe ( e => {
        this.Result = e;
      })
    }
    else if(this.TypePredict === 4) {
      this.cali.getPredict4(data).subscribe ( e => {
        this.Result = e;
      })
    }
    else if(this.TypePredict === 5) {
      this.cali.getPredict5(data).subscribe ( e => {
        this.Result = e;
      })
    }
  }
}
