class CosmosBlogs {
  public title: string;
  public slug: string;

  constructor(payload: any) {
    this.title = payload.title;
    this.slug = payload.slug;
  }

  static fromJson(data: any) {
    return new CosmosBlogs({
      title: data.topic_title,
      slug: data.topic_slug,
    });
  }
}

export default CosmosBlogs;
