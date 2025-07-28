import type { Struct, Schema } from '@strapi/strapi';

export interface HomeQuienesSomos extends Struct.ComponentSchema {
  collectionName: 'components_home_quienes_somos';
  info: {
    displayName: 'Quienes somos';
  };
  attributes: {
    titulo: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u00BFQui\u00E9nes somos?'>;
    descripcion: Schema.Attribute.Blocks & Schema.Attribute.Required;
    imagen: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    boton: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u00A1Ven a visitarnos!'>;
  };
}

export interface HomePlatosDestacados extends Struct.ComponentSchema {
  collectionName: 'components_home_platos_destacados';
  info: {
    displayName: 'Platos destacados';
    description: '';
  };
  attributes: {
    titulo: Schema.Attribute.String;
    platos: Schema.Attribute.Relation<'oneToMany', 'api::plato.plato'>;
    descripcion: Schema.Attribute.Blocks;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    titulo: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Santa Mar\u00EDa'>;
    descripcion: Schema.Attribute.Blocks & Schema.Attribute.Required;
    imagen_fondo: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    boton: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Consulta nuestra carta'>;
  };
}

export interface CartaCarta extends Struct.ComponentSchema {
  collectionName: 'components_carta_cartas';
  info: {
    displayName: 'Carta';
    description: '';
  };
  attributes: {
    categorias: Schema.Attribute.Relation<
      'oneToMany',
      'api::categoria.categoria'
    >;
    platos: Schema.Attribute.Relation<'oneToMany', 'api::plato.plato'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.quienes-somos': HomeQuienesSomos;
      'home.platos-destacados': HomePlatosDestacados;
      'home.hero': HomeHero;
      'carta.carta': CartaCarta;
    }
  }
}
