// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = TestimonialBlockSlice | TextBlockSlice | MenuSlice | GallerySlice | ResourceBlockSlice | SoundcloudBlockSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Subpage documents */
interface PageDocumentData {
    /**
     * Title field in *Subpage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Section field in *Subpage*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: page.section
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    section: prismicT.RelationField<"section">;
    /**
     * Slice Zone field in *Subpage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Subpage → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = TextBlockSlice | GallerySlice | MenuSlice | EmbedBlockSlice;
/**
 * Subpage document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Section documents */
interface SectionDocumentData {
    /**
     * Title field in *Section*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: section.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Section*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: section.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SectionDocumentDataSlicesSlice>;
}
/**
 * Slice for *Section → Slice Zone*
 *
 */
type SectionDocumentDataSlicesSlice = TextBlockSlice | GallerySlice | MenuSlice | ResourceBlockSlice | WufooFormSlice | EmbedBlockSlice | TestimonialBlockSlice;
/**
 * Section document from Prismic
 *
 * - **API ID**: `section`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SectionDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SectionDocumentData>, "section", Lang>;
/** Content for Site documents */
interface SiteDocumentData {
    /**
     * Menu field in *Site*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: site.menu[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    menu: prismicT.GroupField<Simplify<SiteDocumentDataMenuItem>>;
}
/**
 * Item in Site → Menu
 *
 */
export interface SiteDocumentDataMenuItem {
    /**
     * Link field in *Site → Menu*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: site.menu[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.RelationField;
    /**
     * Title field in *Site → Menu*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: site.menu[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Site document from Prismic
 *
 * - **API ID**: `site`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SiteDocumentData>, "site", Lang>;
export type AllDocumentTypes = HomeDocument | PageDocument | SectionDocument | SiteDocument;
/**
 * Primary content in EmbedBlock → Primary
 *
 */
interface EmbedBlockSliceDefaultPrimary {
    /**
     * Title field in *EmbedBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: embed_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Collapsible field in *EmbedBlock → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: embed_block.primary.collapsible
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    collapsible: prismicT.BooleanField;
    /**
     * Description field in *EmbedBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: embed_block.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in EmbedBlock → Items
 *
 */
export interface EmbedBlockSliceDefaultItem {
    /**
     * Embed Link field in *EmbedBlock → Items*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: embed_block.items[].embed_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    embed_link: prismicT.EmbedField;
}
/**
 * Default variation for EmbedBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `EmbedBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<EmbedBlockSliceDefaultPrimary>, Simplify<EmbedBlockSliceDefaultItem>>;
/**
 * Slice variation for *EmbedBlock*
 *
 */
type EmbedBlockSliceVariation = EmbedBlockSliceDefault;
/**
 * EmbedBlock Shared Slice
 *
 * - **API ID**: `embed_block`
 * - **Description**: `EmbedBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedBlockSlice = prismicT.SharedSlice<"embed_block", EmbedBlockSliceVariation>;
/**
 * Primary content in GalleryBlock → Primary
 *
 */
interface GallerySliceDefaultPrimary {
    /**
     * Title field in *GalleryBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Collapsible field in *GalleryBlock → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: gallery.primary.collapsible
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    collapsible: prismicT.BooleanField;
}
/**
 * Item in GalleryBlock → Items
 *
 */
export interface GallerySliceDefaultItem {
    /**
     * Image field in *GalleryBlock → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *GalleryBlock → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *GalleryBlock → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Link field in *GalleryBlock → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery.items[].internal_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    internal_link: prismicT.RelationField;
}
/**
 * Default variation for GalleryBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Gallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySliceDefault = prismicT.SharedSliceVariation<"default", Simplify<GallerySliceDefaultPrimary>, Simplify<GallerySliceDefaultItem>>;
/**
 * Slice variation for *GalleryBlock*
 *
 */
type GallerySliceVariation = GallerySliceDefault;
/**
 * GalleryBlock Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: `Gallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySlice = prismicT.SharedSlice<"gallery", GallerySliceVariation>;
/**
 * Item in MenuBlock → Items
 *
 */
export interface MenuSliceDefaultItem {
    /**
     * Link field in *MenuBlock → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.RelationField<"page" | "section" | "home">;
    /**
     * Title field in *MenuBlock → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Default variation for MenuBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Menu`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<MenuSliceDefaultItem>>;
/**
 * Slice variation for *MenuBlock*
 *
 */
type MenuSliceVariation = MenuSliceDefault;
/**
 * MenuBlock Shared Slice
 *
 * - **API ID**: `menu`
 * - **Description**: `Menu`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuSlice = prismicT.SharedSlice<"menu", MenuSliceVariation>;
/**
 * Primary content in ResourceBlock → Primary
 *
 */
interface ResourceBlockSliceDefaultPrimary {
    /**
     * Title field in *ResourceBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resource_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Collapsible field in *ResourceBlock → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: resource_block.primary.collapsible
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    collapsible: prismicT.BooleanField;
    /**
     * Description field in *ResourceBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resource_block.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ResourceBlock → Items
 *
 */
export interface ResourceBlockSliceDefaultItem {
    /**
     * Description field in *ResourceBlock → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resource_block.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Title field in *ResourceBlock → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resource_block.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Date field in *ResourceBlock → Items*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: resource_block.items[].date
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * Type field in *ResourceBlock → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: PDF
     * - **API ID Path**: resource_block.items[].type
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    type: prismicT.SelectField<"PDF" | "Link", "filled">;
    /**
     * resource field in *ResourceBlock → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: resource_block.items[].resource
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    resource: prismicT.LinkField;
}
/**
 * Default variation for ResourceBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ResourceBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ResourceBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ResourceBlockSliceDefaultPrimary>, Simplify<ResourceBlockSliceDefaultItem>>;
/**
 * Slice variation for *ResourceBlock*
 *
 */
type ResourceBlockSliceVariation = ResourceBlockSliceDefault;
/**
 * ResourceBlock Shared Slice
 *
 * - **API ID**: `resource_block`
 * - **Description**: `ResourceBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ResourceBlockSlice = prismicT.SharedSlice<"resource_block", ResourceBlockSliceVariation>;
/**
 * Primary content in SoundcloudBlock → Primary
 *
 */
interface SoundcloudBlockSliceDefaultPrimary {
    /**
     * Title field in *SoundcloudBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: soundcloud_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in SoundcloudBlock → Items
 *
 */
export interface SoundcloudBlockSliceDefaultItem {
    /**
     * Embed Link field in *SoundcloudBlock → Items*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: soundcloud_block.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    link: prismicT.EmbedField;
}
/**
 * Default variation for SoundcloudBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SoundcloudBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SoundcloudBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SoundcloudBlockSliceDefaultPrimary>, Simplify<SoundcloudBlockSliceDefaultItem>>;
/**
 * Slice variation for *SoundcloudBlock*
 *
 */
type SoundcloudBlockSliceVariation = SoundcloudBlockSliceDefault;
/**
 * SoundcloudBlock Shared Slice
 *
 * - **API ID**: `soundcloud_block`
 * - **Description**: `SoundcloudBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SoundcloudBlockSlice = prismicT.SharedSlice<"soundcloud_block", SoundcloudBlockSliceVariation>;
/**
 * Item in TestimonialBlock → Items
 *
 */
export interface TestimonialBlockSliceDefaultItem {
    /**
     * Testimonial Text field in *TestimonialBlock → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial_block.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Testimonial Author field in *TestimonialBlock → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial_block.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
}
/**
 * Default variation for TestimonialBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TestimonialBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialBlockSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<TestimonialBlockSliceDefaultItem>>;
/**
 * Slice variation for *TestimonialBlock*
 *
 */
type TestimonialBlockSliceVariation = TestimonialBlockSliceDefault;
/**
 * TestimonialBlock Shared Slice
 *
 * - **API ID**: `testimonial_block`
 * - **Description**: `TestimonialBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialBlockSlice = prismicT.SharedSlice<"testimonial_block", TestimonialBlockSliceVariation>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceDefaultPrimary {
    /**
     * Title field in *TextBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Collapsible field in *TextBlock → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: text_block.primary.collapsible
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    collapsible: prismicT.BooleanField;
}
/**
 * Item in TextBlock → Items
 *
 */
export interface TextBlockSliceDefaultItem {
    /**
     * Text field in *TextBlock → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_block.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextBlockSliceDefaultPrimary>, Simplify<TextBlockSliceDefaultItem>>;
/**
 * Slice variation for *TextBlock*
 *
 */
type TextBlockSliceVariation = TextBlockSliceDefault;
/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSlice = prismicT.SharedSlice<"text_block", TextBlockSliceVariation>;
/**
 * Primary content in WufooForm → Primary
 *
 */
interface WufooFormSliceDefaultPrimary {
    /**
     * Embed Code field in *WufooForm → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: wufoo_form.primary.embed_code
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    embed_code: prismicT.RichTextField;
}
/**
 * Default variation for WufooForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WufooForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WufooFormSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WufooFormSliceDefaultPrimary>, never>;
/**
 * Slice variation for *WufooForm*
 *
 */
type WufooFormSliceVariation = WufooFormSliceDefault;
/**
 * WufooForm Shared Slice
 *
 * - **API ID**: `wufoo_form`
 * - **Description**: `WufooForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WufooFormSlice = prismicT.SharedSlice<"wufoo_form", WufooFormSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SectionDocumentData, SectionDocumentDataSlicesSlice, SectionDocument, SiteDocumentData, SiteDocumentDataMenuItem, SiteDocument, AllDocumentTypes, EmbedBlockSliceDefaultPrimary, EmbedBlockSliceDefaultItem, EmbedBlockSliceDefault, EmbedBlockSliceVariation, EmbedBlockSlice, GallerySliceDefaultPrimary, GallerySliceDefaultItem, GallerySliceDefault, GallerySliceVariation, GallerySlice, MenuSliceDefaultItem, MenuSliceDefault, MenuSliceVariation, MenuSlice, ResourceBlockSliceDefaultPrimary, ResourceBlockSliceDefaultItem, ResourceBlockSliceDefault, ResourceBlockSliceVariation, ResourceBlockSlice, SoundcloudBlockSliceDefaultPrimary, SoundcloudBlockSliceDefaultItem, SoundcloudBlockSliceDefault, SoundcloudBlockSliceVariation, SoundcloudBlockSlice, TestimonialBlockSliceDefaultItem, TestimonialBlockSliceDefault, TestimonialBlockSliceVariation, TestimonialBlockSlice, TextBlockSliceDefaultPrimary, TextBlockSliceDefaultItem, TextBlockSliceDefault, TextBlockSliceVariation, TextBlockSlice, WufooFormSliceDefaultPrimary, WufooFormSliceDefault, WufooFormSliceVariation, WufooFormSlice };
    }
}
