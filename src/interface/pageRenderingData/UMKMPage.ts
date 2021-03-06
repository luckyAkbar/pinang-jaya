import { FooterLinkContent } from "../pageResource/footer";
import { UMKMContact } from "../profileUMKM";

interface ProductAttributeInList {
  productLink: string,
  category: string,
  imageLink: string,
  imageAlt: string,
  currency: string,
  name: string,
  price: number,
  totalLikes: number,
}

export default interface UMKMPage {
  villageName: string | undefined,
  copyrightYear: string | undefined,
  UMKMFeaturedImageLink: string,
  UMKMAltForFeaturedImage: string,
  tags: string[],
  UMKMLogoLink: string,
  UMKMAltForLogo: string,
  UMKMName: string,
  listProducts: ProductAttributeInList[],
  UMKMDescriptions: string[],
  contacts: UMKMContact[],
  footerLinks: FooterLinkContent[],
}

export { ProductAttributeInList }