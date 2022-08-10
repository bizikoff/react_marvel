class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=605e9794ec5fa8b7a6ab3a4429002480';

  getRecource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status : ${res.status}`)
    }

    return await res.json();
  }

  getAllCharacters = () => {
    return this.getRecource(`${this._apiBase}characters?limit=9&offset=180&${this._apiKey}`)
  }

  getCharacter = (id) => {
    return this.getRecource(`${this._apiBase}characters/${id}?${this._apiKey}`)
  }
}

export default MarvelService;