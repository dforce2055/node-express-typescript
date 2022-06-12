export type Identifier = number | number
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'snowy' | 'foggy' | 'windy' | 'thunderstorm' | 'hail' | 'unknown'
export type Visibility = 'none' | 'poor' | 'good' | 'excellent'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type DiaryEntryWithoutComments = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type DiaryEntryWithoutComments = Omit<DiaryEntry, 'comment'>
