import moment from "moment";
import { Author, Tag } from "@models";

class Post {
  public canonicalUrl: string;
  public author: string;
  public createdAt: string;
  public customExcerpt: string;
  public excerpt: string;
  public featureImage: string;
  public featured: boolean;
  public html: string;
  public publishedAt: string;
  public slug: string;
  public title: string;
  public visibility: boolean;
  public primaryAuthor: Author;
  public tags: Tag[];

  constructor(payload: any) {
    this.canonicalUrl = payload.canonicalUrl;
    this.author = payload.primaryAuthor;
    this.createdAt = payload.createdAt;
    this.customExcerpt = payload.customExcerpt;
    this.excerpt = payload.excerpt;
    this.featureImage = payload.featureImage;
    this.featured = payload.featured;
    this.html = payload.html;
    this.publishedAt = payload.publishedAt;
    this.slug = payload.slug;
    this.title = payload.title;
    this.visibility = payload.visibility;
    this.primaryAuthor = payload.primaryAuthor;
    this.tags = payload.tags;
  }

  static formatExcerpt(excerpt: string, limit: number) {
    const format = excerpt.slice(0, limit);
    const afterFormat = excerpt.length > limit ? "..." : "";
    return `${format}${afterFormat}`;
  }

  static formatTags(tags: any) {
    return tags.map((x) => Tag.fromJson(x));
  }

  static fromJson(data: any, { excerptLimit = 250 }: any) {
    return new Post({
      canonicalUrl: data["canonical_url"],
      author: data,
      createdAt: moment(data["created_at"]).format("Do MMM YYYY, h:mm a"),
      customExcerpt: data["custom_excerpt"],
      excerpt: this.formatExcerpt(data.excerpt, excerptLimit),
      featureImage: data["feature_image"],
      featured: data.featured,
      html: data.html,
      publishedAt: moment(data["published_at"]).format("Do MMM YYYY, h:mm a"),
      slug: data.slug,
      title: data.title,
      visibility: data.visibility,
      primaryAuthor: Author.fromJson(data["primary_author"]),
      tags: this.formatTags(data.tags),
    });
  }
}

export default Post;
