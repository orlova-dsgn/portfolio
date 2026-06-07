export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image1: ImageMetadata;
  imgWidth: string;
  gradientColorFrom: string;
  gradientColorTo: string;
  externalLink?: string;
  imgPlaceClassName?: string;
}
