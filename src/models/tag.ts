class Tag {
  public name: string;
  public slug: string;

  constructor(payload: any) {
    this.name = payload.name;
    this.slug = payload.slug;
  }

  static fromJson(data: any) {
    return new Tag({
      name: data.name,
      slug: data.slug ?? data.name,
    });
  }
}

export default Tag;
