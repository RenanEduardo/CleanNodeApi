import { SurveyResultModel } from '@/domain/models/survey-result'

export type SaveSurveyModel = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  save (data: SaveSurveyModel): Promise<SurveyResultModel>
}
