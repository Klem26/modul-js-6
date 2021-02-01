const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));