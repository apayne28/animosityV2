export type AnimeEntry = {
  entry: AnimeObject;
};
export type AnimeObject = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  titles: [
    {
      type: string;
      title: string;
    }
  ];
  title: "string";
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: 1;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: AnimeProducer[];
  licensors: AnimeLicensor[];
  studios: AnimeStudios[];
  genres: AnimeGenres[];
  explicit_genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  themes: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  demographics: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  relations: [
    {
      relation: string;
      entry: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      };
    }
  ];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: [
    {
      name: string;
      url: string;
    }
  ];
  streaming: [
    {
      name: string;
      url: string;
    }
  ];
};

export type AnimeProducer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeLicensor = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeStudios = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
export type AnimeGenres = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeThemes = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeDemographics = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeCharacters = {
  character: AnimeCharacter;
  role: string;
  favorites: number;
};

export type AnimeCharacter = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  name: string;
};

export type AnimeCharacterFull = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
  anime: [];
  manga: [];
  voices: AnimeVoiceActors[];
};

export type AnimeCharacterAnimeAppearances = {
  role: string;
  anime: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
};

export type AnimeCharacterMangaAppearances = {
  role: string;
  manga: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
};

export type AnimeVoiceActor = {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
  name: string;
};

export type AnimeVoiceActors = {
  person: AnimeVoiceActor;
  language: string;
};

export type AnimeRelations = {
  relation: string;
  entry: AnimeRelation[];
};

export type AnimeRelation = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

// MANGA TYPES

export type MangaEntry = {
  entry: MangaObject;
};
export type MangaObject = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  approved: boolean;
  titles: MangaTitles[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  publishing: boolean;
  published: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
    string: string;
  };
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: MangaAuthor[];
  serializations: MangaSerialization[];
  genres: MangaGenres[];
  explicit_genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  themes: MangaThemes[];
  demographics: MangaDemographics[];
  relations: MangaRelations[];

  external: MangaExternal[];
};

export type MangaTitles = {
  type: string;
  title: string;
};

export type MangaAuthor = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type MangaSerialization = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type MangaGenres = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type MangaThemes = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type MangaDemographics = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type MangaRelations = {
  relation: string;
  entry: AnimeRelation[];
};

export type MangaRelation = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type MangaExternal = {
  name: string;
  url: string;
};
