export const getHeaderDescription = (key: string) => {
  const headerMapper: Record<string, string> = {
    serviceDayName: 'Dia',
    weekDayName: 'Dia - Semana',
    drummer: 'Bateria',
    pianist: 'Teclado',
    guitar_player: 'Guitarra',
    bassist: 'Baixo',
    acoustic_guitar_player: 'Violão',
    vocal_alto: 'Contralto',
    vocal_soprano: 'Soprano',
    vocal_tenor: 'Tenor',
    ministry: 'Ministro',
    horn_player: 'Trompete',
    sax_player: 'Sax',
    extra: 'Extra',
  };

  return headerMapper[key];
}
