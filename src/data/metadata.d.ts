export declare const SITE_CONFIG: {
  name: string;
  domain: string;
  baseUrl: string;
  yandexVerification: string;
  googleVerification: string;
  gaId: string;
};

export interface MetaData {
  title: string;
  description: string;
  h1: string;
}

export declare const SEO_METADATA: Record<string, MetaData>;
export declare const RU_METADATA: Record<string, MetaData>;
export declare const BLOG_METADATA: Record<string, MetaData>;
