export type MarvelHeroesListResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Hero[] | Comic[];
  };
};

export interface MarvelComicsListResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
  };
}

export interface Comic {
  id: number;
  title: string;
  issueNumber: number;
  description: string;
  pageCount: number;
  thumbnail: Thumbnail;
  creators: CreatorList;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface CreatorList {
  items: Creator[];
}

interface Creator {
  name: string;
  role: string;
}

export type Hero = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: ComicItem[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: SeriesItem[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: StoryItem[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: EventItem[];
    returned: number;
  };
  urls: UrlItem[];
};

export type ComicItem = {
  resourceURI: string;
  name: string;
};

export type SeriesItem = {
  resourceURI: string;
  name: string;
};

export type StoryItem = {
  resourceURI: string;
  name: string;
  type: string;
};

export type EventItem = {
  resourceURI: string;
  name: string;
};

export type UrlItem = {
  type: string;
  url: string;
};
