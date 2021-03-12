import { SaveSurveyResultParams } from '@/data/usecases/survey-result/save-survey-result/db-save-surveys-result-protocols'
import { SurveyResultModel } from '@/domain/models/survey-result'

export const mockSaveSurveyResultData = (): SaveSurveyResultParams => ({
  accountId: 'any_account_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): SurveyResultModel => Object.assign({}, mockSaveSurveyResultData(), { id: 'any_id' })
