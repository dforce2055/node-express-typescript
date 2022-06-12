import diaryData from './diaryentries.json'
import { DiaryEntry, DiaryEntryWithoutComments } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntires = (): DiaryEntry[] => diaries

export const getEntiresWithoutComments = (): DiaryEntryWithoutComments[] => {
  return diaries.map(entry => {
    return {
      id: entry.id,
      date: entry.date,
      weather: entry.weather,
      visibility: entry.visibility
    }
  })
}

export const addEntry = (): null => null
