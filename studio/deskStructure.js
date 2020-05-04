import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings, MdStars, MdCreditCard, MdFace, MdCropPortrait } from 'react-icons/lib/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['page', 'route', 'site-config'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        // Give it a title
        .title('Content Blocks')
        .icon(MdCropPortrait)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Content Blocks')
            .items([
              S.listItem()
                .title('Features')
                .icon(MdStars)
                .schemaType('document')
                .child(S.documentTypeList('feature').title('Features')),
              S.listItem()
                .title('Customers')
                .icon(MdFace)
                .schemaType('document')
                .child(S.documentTypeList('customer').title('Customers')),
              S.listItem()
                .title('Plans')
                .icon(MdCreditCard)
                .schemaType('document')
                .child(S.documentTypeList('plan').title('Plans'))
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        )
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
