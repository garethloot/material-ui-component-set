(() => ({
  name: 'Component',
  icon: 'ContainerIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Component',
      options: [
        {
          type: 'TOGGLE',
          label: 'Toggle',
          key: 'toggle',
          value: true,
        },
        {
          type: 'COLOR',
          label: 'Color',
          key: 'color',
          value: 'Light',
        },
      ],
      descendants: [],
    },
  ],
}))();
