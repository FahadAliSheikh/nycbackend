export interface IApiInfo {
  contextPath: string;
}

export interface PostsList {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: [PostObject];
}

export interface PostObject {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: [string];
  org_facet: [string];
  per_facet: [string];
  geo_facet: [string];
  multimedia: [MultimediaObject];
  short_url: string;
}

export interface MultimediaObject {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}
