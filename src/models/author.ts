class Author {
  public bio: string;
  public name: string;
  public profileImage: string;

  constructor(payload: any) {
    this.bio = payload.bio;
    this.name = payload.name;
    this.profileImage = payload.profileImage;
  }

  static fromJson(data: any) {
    return new Author({
      bio: data.bio,
      name: data.name,
      profileImage: data["profile_image"],
    });
  }
}

export default Author;
