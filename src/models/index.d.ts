import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

type ArticleMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type JavaScriptMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

export declare class Article {
  readonly id: string;
  readonly title: string;
  readonly content?: string | null;
  readonly owner: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Article, ArticleMetaData>);
  static copyOf(
    source: Article,
    mutator: (
      draft: MutableModel<Article, ArticleMetaData>
    ) => MutableModel<Article, ArticleMetaData> | void
  ): Article;
}

export declare class JavaScript {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<JavaScript, JavaScriptMetaData>);
  static copyOf(
    source: JavaScript,
    mutator: (
      draft: MutableModel<JavaScript, JavaScriptMetaData>
    ) => MutableModel<JavaScript, JavaScriptMetaData> | void
  ): JavaScript;
}
