module.exports = {
  components: 'src/components/**/*.js',
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Вступление',
      content: 'About.md'
    },
    {
      name: 'Компоненты',
      components: 'src/components/**/*.js',      
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'      
    }
  ]
};