import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBulletItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullet_items';
  info: {
    displayName: 'bullet-item';
    icon: 'bulletList';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.bullet-item': SharedBulletItem;
    }
  }
}
