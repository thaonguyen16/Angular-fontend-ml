import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';


export const CALIHOUSING_URL = BASE_URL + '/calihousing';

export const CALIHOUSING_D_URL = CALIHOUSING_URL + '/dataset';

export const CALIHOUSING_SAMPLE_URL = CALIHOUSING_URL + '/linear-data-sample';
export const CALIHOUSING_INPUT_URL = CALIHOUSING_URL + '/linear-predict-input';

export const CALIHOUSING_SAMPLE_DT_URL = CALIHOUSING_URL + '/decision-tree-data-sample';
export const CALIHOUSING_INPUT_DT_URL = CALIHOUSING_URL + '/decision-tree-predict-input';

export const CALIHOUSING_SAMPLE_RF_URL = CALIHOUSING_URL + '/random-forest-data-sample';
export const CALIHOUSING_INPUT_RF_URL = CALIHOUSING_URL + '/random-forest-predict-input';

export const CALIHOUSING_SAMPLE_RFGS_URL = CALIHOUSING_URL + '/random-forest-grid-search-data-sample';
export const CALIHOUSING_INPUT_RFGS_URL = CALIHOUSING_URL + '/random-forest-grid-search-predict-input';

export const CALIHOUSING_SAMPLE_RFRD_URL = CALIHOUSING_URL + '/random-forest-random-search-data-sample';
export const CALIHOUSING_INPUT_RFRD_URL = CALIHOUSING_URL + '/random-forest-random-search-predict-input';
