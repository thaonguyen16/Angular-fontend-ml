export class CaliHousing {
    Predictions!: string[];
    Labels!: string[];
    mean!: string;
    std!: string;
    rmse_train!: string;
    rmse_test!: string;
    predict_list!: string[];
    predict_index!: string[];
    predict_labels!: any[];
}

export class PredictData {
    longitude! : number;
    latitude!: number;
    housing_median_age!: number;
    total_rooms!: number;
    total_bedrooms!: number;
    population!: number;
    households!: number;
    median_income!: number;
    ocean_proximity!: string;
}
