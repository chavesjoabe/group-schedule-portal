export type GroupScheduleResponse = {
  serviceDayName: string;
  weekDayName: string;
  drummer: string;
  pianist: string;
  guitar_player: string;
  bassist: string;
  acoustic_guitar_player: string;
  vocal_alto: string;
  vocal_soprano: string;
  vocal_tenor: string;
  ministry: string;
  horn_player: string;
  sax_player: string;
  extra: string;
}

export type ScheduleData = {
  data: GroupScheduleResponse[];
}

export type ScheduleCardData = {
  data: GroupScheduleResponse;
}

export const data: GroupScheduleResponse[] = [
  {
    serviceDayName: '01/02/2024',
    weekDayName: 'Quinta-feira',
    drummer: 'Lucas',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Eber',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Duda',
    vocal_soprano: 'Dayane coppa',
    vocal_tenor: 'Junior',
    ministry: 'Israel',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Katia'
  },
  {
    serviceDayName: '04/02/2024',
    weekDayName: 'Domingo',
    drummer: 'Michael',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Amauri',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Leticia',
    vocal_soprano: 'Mariana',
    vocal_tenor: 'Junior',
    ministry: 'Nathali',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Dayane coppa'
  },
  {
    serviceDayName: '04/02/2024 Night',
    weekDayName: 'Domingo Noite',
    drummer: 'Lucas',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Eber',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Duda',
    vocal_soprano: 'Karen',
    vocal_tenor: 'Junior',
    ministry: 'Maria',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Geovania'
  },
  {
    serviceDayName: '06/02/2024',
    weekDayName: 'Terça-feira',
    drummer: 'Joabe',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Amauri',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Katia',
    vocal_soprano: 'Ione',
    vocal_tenor: 'Junior',
    ministry: 'Nathali',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Israel'
  },
  {
    serviceDayName: '08/02/2024',
    weekDayName: 'Quinta-feira',
    drummer: 'Joel',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Claudio',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Daiane Santos',
    vocal_soprano: 'Mariana',
    vocal_tenor: 'Junior',
    ministry: 'Jessica',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Leticia'
  },
  {
    serviceDayName: '11/02/2024',
    weekDayName: 'Domingo',
    drummer: 'Joabe',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Joao',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Katia',
    vocal_soprano: 'Karen',
    vocal_tenor: 'Junior',
    ministry: 'Israel',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Ester'
  },
  {
    serviceDayName: '11/02/2024 Night',
    weekDayName: 'Domingo Noite',
    drummer: 'Lucas',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Amauri',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Duda',
    vocal_soprano: 'Carol',
    vocal_tenor: 'Junior',
    ministry: 'Jessica',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Nathali'
  },
  {
    serviceDayName: '13/02/2024',
    weekDayName: 'Terça-feira',
    drummer: 'Michael',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Joao',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Katia',
    vocal_soprano: 'Karen',
    vocal_tenor: 'Junior',
    ministry: 'Maria',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Dayane coppa'
  },
  {
    serviceDayName: '15/02/2024',
    weekDayName: 'Quinta-feira',
    drummer: 'Joabe',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Claudio',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Leticia',
    vocal_soprano: 'Mariana',
    vocal_tenor: 'Junior',
    ministry: 'Israel',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Carol'
  },
  {
    serviceDayName: '18/02/2024',
    weekDayName: 'Domingo',
    drummer: 'Lucas',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Eber',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Barbara',
    vocal_soprano: 'Karen',
    vocal_tenor: 'Junior',
    ministry: 'Jessica',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Daiane Santos'
  },
  {
    serviceDayName: '18/02/2024 Night',
    weekDayName: 'Domingo Noite',
    drummer: 'Joel',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Amauri',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Geovania',
    vocal_soprano: 'Ione',
    vocal_tenor: 'Junior',
    ministry: 'Ester',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Ester'
  },
  {
    serviceDayName: '20/02/2024',
    weekDayName: 'Terça-feira',
    drummer: 'Joabe',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Joao',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Barbara',
    vocal_soprano: 'Karen',
    vocal_tenor: 'Junior',
    ministry: 'Israel',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Mariana'
  },
  {
    serviceDayName: '22/02/2024',
    weekDayName: 'Quinta-feira',
    drummer: 'Michael',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Eber',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Leticia',
    vocal_soprano: 'Dayane coppa',
    vocal_tenor: 'Junior',
    ministry: 'Jessica',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Katia'
  },
  {
    serviceDayName: '25/02/2024',
    weekDayName: 'Domingo',
    drummer: 'Joel',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Amauri',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Katia',
    vocal_soprano: 'Carol',
    vocal_tenor: 'Junior',
    ministry: 'Nathali',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Duda'
  },
  {
    serviceDayName: '25/02/2024 Night',
    weekDayName: 'Domingo Noite',
    drummer: 'Lucas',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Eber',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Geovania',
    vocal_soprano: 'Karen',
    vocal_tenor: 'Junior',
    ministry: 'Israel',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Barbara'
  },
  {
    serviceDayName: '27/02/2024',
    weekDayName: 'Terça-feira',
    drummer: 'Joabe',
    pianist: 'Isabella',
    guitar_player: 'Tiago',
    bassist: 'Joao',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Barbara',
    vocal_soprano: 'Mariana',
    vocal_tenor: 'Junior',
    ministry: 'Jessica',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Carol'
  },
  {
    serviceDayName: '29/02/2024',
    weekDayName: 'Quinta-feira',
    drummer: 'Lucas',
    pianist: 'Isabella',
    guitar_player: 'Dener',
    bassist: 'Amauri',
    acoustic_guitar_player: 'Deda',
    vocal_alto: 'Daiane Santos',
    vocal_soprano: 'Karen',
    vocal_tenor: 'Junior',
    ministry: 'Israel',
    horn_player: 'Samuel',
    sax_player: 'Alessandro',
    extra: 'Mariana'
  }
]
