async function getCities(db) {
  const citiesCol = collection(db, 'board');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
