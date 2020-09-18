import * as R from "ramda";
import moment from "moment";

class Post {
  public canonicalUrl: string;
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

  constructor(payload: any) {
    this.canonicalUrl = payload.canonicalUrl;
    this.createdAt = payload.createdAt;
    this.customExcerpt = payload.customExcerpt;
    this.excerpt = payload.excerpt;
    this.featureImage = payload.featureImage;
    this.featured = payload.featured;
    this.html = payload.html;
    this.publishedAt = payload.publishedAt;
    this.slug = payload.slug;
    this.title = payload.string;
    this.visibility = payload.visibility;
  }

  static fromJson(data: any) {
    return new Post({
      canonicalUrl: data["canonical_url"],
      createdAt: moment(data["created_at"]).format("YYYY-MM-DD"),
      customExcerpt: data["custom_excerpt"],
      excerpt: data.excerpt,
      featureImage: data["feature_image"],
      featured: data.featured,
      html: data.html,
      publishedAt: moment(data["published_at"]).format("YYYY-MM-DD"),
      slug: data.slug,
      title: data.title,
      visibility: data.visibility,
    });
  }
}

export default Post;
