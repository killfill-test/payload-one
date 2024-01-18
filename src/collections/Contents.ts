import { CollectionConfig } from 'payload/types'

const Contents: CollectionConfig = {
  slug: 'contents',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {name: 'title', type: 'text'},
    {name: 'url', type: 'text'},
    {name: 'estado', type: 'select', options: [{label: 'Dale', value: 'dale'}, {label: 'Listo', value: 'listo'}]}
  ],
}

export default Contents
