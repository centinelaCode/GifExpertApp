

export const getGifs = async( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=60SeCvIdnXToPGMFsK8uQPLPQUJ9Gu0k`;
  const resp = await fetch( url );

  // para acceder es data.data se usa desestructuracion
  const { data } = await resp.json();

  // se obtiene d ela data loq ue se va utilizar
  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;
}