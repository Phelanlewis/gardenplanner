export default function() {
       this.namespace = '/api';

        this.get('/vegetables', function() {
          return {
            data: [{
              id: 'Broccoli',
              type: 'Vegetable',
              attributes: {
                title: 'Broccoli',
                sun: 'Full Sun',
                plantingseason: 'April to July',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/800px-Broccoli_and_cross_section_edit.jpg'
              }
                }, {
              id: 'Tomato',
              type: 'Vegetable',
              attributes:  {
                title: 'Tomato',
                sun: 'Full Sun',
                plantingseason: 'March to July',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tomato_fruit_and_flowers_at_day_52.jpg/800px-Tomato_fruit_and_flowers_at_day_52.jpg'
              }
                }, {
              id: 'Potato',
              type: 'Vegetable',
              attributes: {
                title: 'Potato',
                sun: 'Partial and Full Sun',
                plantingseason: 'March to July',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/800px-Patates.jpg'
              }
            }]
          };
        });
}
