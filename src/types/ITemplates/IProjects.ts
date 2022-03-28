export namespace IProjects {
  export interface IProjects_Data {
    node: INode;
  }

  export interface INode {
    id?: string;
    slug?: string;
    frontmatter: IFrontmatter;
  }

  export interface IFrontmatter {
    title?: string;
    tags?: string;
    featuredImg?: IFeaturedImg | null;
    excerpt?: string;
  }

  export interface IFeaturedImg {
    publicURL?: string;
  }
}
